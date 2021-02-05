import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { MainService } from 'src/app/provider/main.service';
declare var $: any;

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  addSubForm:FormGroup;
  profile: any;
  search: string;
  productlists: any = [];
  limit:number= 5;
  currentPage = 1;
  productId: any;
  itemPerPage = 5;
  p: any=0;
  status: any;
  ProductLenght:any;


  constructor(private router: Router,public mainService: MainService) {


   }

  ngOnInit() {
    this.productList();
    this.addSubForm = new FormGroup({
      "categoryName": new FormControl('', Validators.required),
    });
  }

addModal(){
  $('#addSub').modal('show')
}

  addProductCategory(){
let url = 'admin/addProductCategory'

let data =
  {

    'categoryName': this.addSubForm.value.categoryName,
    'categoryImage': this.profile,
  }
  this.mainService.showSpinner();
  this.mainService.postApi(url, data, 1).subscribe((res: any) => {
    console.log("addProduct response ==>", res)
    if (res.responseCode == 200 && res.result) {

      this.mainService.hideSpinner();
      this.mainService.successToast(res.responseMessage)
      $('#addSub').modal('hide');

    } else {
      this.mainService.hideSpinner();
      this.mainService.errorToast(res.responseMessage)
    }
    error => {
      this.mainService.hideSpinner();
      this.mainService.errorToast(error.responseMessage)
    }
  })


  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.profile = reader.result;
    console.log("profile", this.profile)
  }

  searchValue() {

    this.mainService.showSpinner();
    let object = {
      "search": this.search,
      "page": this.currentPage,
      "limit": this.limit
      }
    this.mainService.postApi('admin/productList', object, 1).subscribe(res => {
      console.log(" productList==>", res)
      if (res.responseCode == 200) {
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)
        this.productlists = res.result.docs
      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast(error.responseMessage)
      }
    })
    }
    exportCSV() {
      {
      let dataArr = [];
      this.productlists.forEach((element, ind) => {
      dataArr.push({
      'sno': ind + 1,
      'Name': element.productName ? element.productName : '--',
      'Charges': element.price ? element.price : '--',
      'Use': element.usedFor ? element.usedFor : '--',
      'Type': element.type ? element.type : '--',
      })
      })
      this.mainService.exportAsExcelFile(dataArr, 'Product_management');
      }
      }


      // exportAsXLXS() {
      //   let dataArr = [];
      //   this.disputeList.forEach((element, ind) => {
      //     dataArr.push({
      //       'Trade ID': element.tradeId ? element.tradeId : 'N/A',
      //       'Dispute ID': element.disputeId ? element.disputeId : 'N/A',
      //       'Trade Date': element.creationTime ? this.datePipe.transform(element.creationTime) : 'N/A',
      //       'Dispute Date': element.disputeTime ? this.datePipe.transform(element.disputeTime) : 'N/A',
      //       'Dispute Status': element.disputeStatus ? element.disputeStatus : 'N/A',
      //       'Trade Amount': element.tradeAmount ? element.tradeAmount : 'N/A',
      //       'Staff Incharge': element.staffIncharge ? element.staffIncharge : 'N/A'

      //     })
      //   })
      //   this.service.exportAsExcelFile(dataArr, 'Dispute Management List')
      //  }





  productList()
  {
    this.mainService.showSpinner();

    let object = {
      "page": this.currentPage,
      "limit": this.limit
      }
    this.mainService.postApi('admin/productList', object, 1).subscribe(res => {
      console.log(" productList==>", res)
      if (res.responseCode == 200 && res.result && res.result.docs) {

        this.productlists = res.result.docs
        this.ProductLenght = res.result.total;
        this.mainService.hideSpinner();
        this.mainService.successToast(res.responseMessage)


      } else {
        this.mainService.hideSpinner();
        this.mainService.errorToast(res.responseMessage)
      }
      error => {
        this.mainService.hideSpinner();
        this.mainService.errorToast(error.responseMessage)
      }
    })
  }
  deleteFunction(id) {
     this.productId  = id
     console.log('delete modal', this.productId)
    $('#deleteModal').modal({ backdrop: 'static', keyboard: false })
  }
  deleteUser()
  {
    this.mainService.showSpinner()
    let object = {
      'productId': this.productId
    }

    this.mainService.deleteApi('admin/deleteProduct',object,1).subscribe(res => {
      console.log('delete id=========>', res)
      if (res.responseCode == 200) {
       this.productList()
        this.mainService.hideSpinner()
        $('#deleteModal').modal('hide');
        this.mainService.successToast(res.responseMessage)

      } else {
        this.mainService.hideSpinner()
        this.mainService.errorToast(res.responseMessage)
      }
    }, error => {
      this.mainService.hideSpinner()
      this.mainService.errorToast(error.responseMessage)
    })
  }
  blockFunction(id,status)
  {
    this.productId  = id
    if(status=="ACTIVE"){
this.status="BLOCK"
    }
    else{
      this.status="ACTIVE"
    }
     console.log('Block Modal', this.productId)
    $('#blockModal').modal({ backdrop: 'static', keyboard: false })
 }
 blockUser()
 {
  this.mainService.showSpinner()
  let data = {
    'productId': this.productId
  }

  this.mainService.postApi('admin/blockUnblockProduct',data,1).subscribe(res => {
    console.log('block id=========>', res)
    if (res.responseCode == 200) {
      this.productList()
      this.mainService.hideSpinner()
      $('#blockModal').modal('hide');
      this.mainService.successToast(res.responseMessage)
    } else {
      this.mainService.hideSpinner()
      this.mainService.errorToast(res.responseMessage)
    }
  }, error => {
    this.mainService.hideSpinner()
    this.mainService.errorToast(error.responseMessage)
  })

 }
 pagination(event) {
  console.log('This event will display page number:->',event);
  this.currentPage = event;
  this.productList()
}
deleteMultiUser(){}
}
