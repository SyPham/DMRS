import { PlanService } from './../../../_core/_service/plan.service';
import { Plan } from './../../../_core/_model/plan';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
import { PageSettingsModel, GridComponent, CellEditArgs, actionBegin, actionComplete } from '@syncfusion/ej2-angular-grids';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DatePipe } from '@angular/common';

import { FormGroup } from '@angular/forms';
import { BPFCEstablishService } from 'src/app/_core/_service/bpfc-establish.service';
import { BuildingService } from 'src/app/_core/_service/building.service';
const WORKER = 4;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  providers: [
    DatePipe
  ]
})
export class PlanComponent implements OnInit {
  @ViewChild('cloneModal') public cloneModal: TemplateRef<any>;
  @ViewChild('planForm')
  public orderForm: FormGroup;
  public pageSettings: PageSettingsModel;
  public toolbarOptions: object;
  public editSettings: object;
  startDate: object = new Date();
  endDate: object;
  bpfcID: number;
  level: number;
  hasWorker: boolean;
  public bpfcData: object;
  public plansSelected: any;
  public date = new Date();
  public toolbar: string[];
  public editparams: object;
  @ViewChild('grid')
  public grid: GridComponent;
  dueDate: any;
  modalReference: NgbModalRef;
  public data: object[];
  searchSettings: any = { hierarchyMode: 'Parent' };
  modalPlan: Plan = {
    id: 0,
    buildingID: 0,
    BPFCEstablishID: 0,
    BPFCName: '',
    hourlyOutput: 0,
    workingHour: 0,
    dueDate: new Date()
  };
  public textLine = 'Select a line name';
  public fieldsGlue: object = { text: 'name', value: 'name' };
  public fieldsLine: object = { text: 'name', value: 'name' };
  public fieldsBPFC: object = { text: 'name', value: 'name' };
  public buildingName: object[];
  public modelName: object[];
  buildingNameEdit: any;
  workHour: number;
  hourlyOutput: number;
  BPFCs: any;
  bpfcEdit: number;
  glueDetails: any;
  setFocus: any;
  constructor(
    private alertify: AlertifyService,
    public modalService: NgbModal,
    private planService: PlanService,
    private buildingService: BuildingService,
    private bPFCEstablishService: BPFCEstablishService,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const now = new Date();
    this.endDate = new Date(now.setDate(now.getDate() + 15));
    this.level = JSON.parse(localStorage.getItem('level')).level;
    this.pageSettings = { pageCount: 20, pageSizes: true, pageSize: 10 };
    this.editparams = { params: { popupHeight: '300px' } };
    this.hasWorker = false;
    this.editSettings = { showDeleteConfirmDialog: false, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbarOptions = ['ExcelExport', 'Add', 'Update', 'Cancel',
      { text: 'Delete Range', tooltipText: 'Delete Range', prefixIcon: 'fa fa-trash', id: 'DeleteRange' }, 'Search',
      { text: 'Clone', tooltipText: 'Copy', prefixIcon: 'fa fa-copy', id: 'Clone' }
    ];
    this.toolbar = ['ExcelExport', 'Add', 'Delete', 'Search', 'Copy'];
    this.getAll(this.startDate, this.endDate);
    this.getAllBPFC();
    // tslint:disable-next-line:one-variable-per-declaration
    const ADMIN = 1, SUPERVISER = 2;
    const ROLES = [ADMIN, SUPERVISER];
    const building = JSON.parse(localStorage.getItem('building'));
    const role = JSON.parse(localStorage.getItem('level')).id;
    if (ROLES.includes(role)) {
      this.buildingService.getBuildings().subscribe(async (buildingData) => {
        const lines = buildingData.filter(item => item.level === 3);
        this.buildingName = lines;
      });
    } else {
      this.getAllLine(building.id);
    }
    this.ClearForm();
  }
  count(index) {
    return Number(index) + 1;
  }
  onDoubleClick(args: any): void {
    this.setFocus = args.column; // Get the column from Double click event
  }
  async sweetalertSelect(inputOptions): Promise<any> {
    const { value: buildingID } = await this.alertify.$swal.fire({
      title: 'Select a building',
      input: 'select',
      inputOptions,
      inputPlaceholder: 'Select a building',
      showCancelButton: true,
    });
    const buildID = Number(buildingID);
    return new Promise((resolve, rejects) => {
      if (buildID > 0) {
        resolve(buildID);
      } else {
        rejects('Error');
      }
    });
  }
  getAllLine(buildingID) {
    this.planService.getLines(buildingID).subscribe((res: any) => {
      this.buildingName = res;
    });
  }

  onChangeBuildingNameEdit(args) {
    this.buildingNameEdit = args.itemData.id;
  }
  onChangeDueDateEdit(args) {
    this.dueDate = (args.value as Date).toDateString();
  }

  onChangeDueDateClone(args) {
    this.date = (args.value as Date);
  }

  onChangeBPFCEdit(args) {
    this.bpfcEdit = args.itemData.id;
  }

  actionComplete(args) {
    if (args.requestType === 'beginEdit') {
      if (this.setFocus.field !== 'buildingName' && this.setFocus.field !== 'bpfcName') {
        (args.form.elements.namedItem(this.setFocus?.field) as HTMLInputElement).focus();
      }
    }
  }
  actionBegin(args) {
    if (args.requestType === 'cancel') {
      this.ClearForm();
    }

    if (args.requestType === 'save') {
      if (args.action === 'edit') {
        this.modalPlan.id = args.data.id || 0;
        this.modalPlan.buildingID = this.buildingNameEdit;
        this.modalPlan.dueDate = this.dueDate;
        this.modalPlan.workingHour = args.data.workingHour;
        this.modalPlan.BPFCEstablishID = args.data.bpfcEstablishID;
        this.modalPlan.BPFCName = args.data.bpfcName;
        this.modalPlan.hourlyOutput = args.data.hourlyOutput;
        this.planService.update(this.modalPlan).subscribe(res => {
          this.alertify.success('Updated succeeded!');
          this.ClearForm();
          this.getAll(this.startDate, this.endDate);
        });
      }
      if (args.action === 'add') {
        this.modalPlan.buildingID = this.buildingNameEdit;
        this.modalPlan.dueDate = this.dueDate;
        this.modalPlan.workingHour = args.data.workingHour || 0;
        this.modalPlan.BPFCEstablishID = this.bpfcEdit;
        this.modalPlan.BPFCName = args.data.bpfcName;
        this.modalPlan.hourlyOutput = args.data.hourlyOutput || 0;
        this.planService.create(this.modalPlan).subscribe(res => {
          if (res) {
            this.alertify.success('Created succeeded!');
            this.getAll(this.startDate, this.endDate);
            this.ClearForm();
          } else {
            this.alertify.warning('This plan has already existed!!!');
            this.getAll(this.startDate, this.endDate);
            this.ClearForm();
          }
        });
      }
    }
  }

  private ClearForm() {
    this.bpfcEdit = 0;
    this.hourlyOutput = 0;
    this.workHour = 0;
    this.dueDate = new Date();
  }

  private validForm(): boolean {
    const array = [this.bpfcEdit];
    return array.every(item => item > 0);
  }

  onChangeWorkingHour(args) {
    this.workHour = args;
  }

  onChangeHourlyOutput(args) {

    this.hourlyOutput = args;
  }

  rowSelected(args) {
  }

  openaddModalPlan(addModalPlan) {
    this.modalReference = this.modalService.open(addModalPlan);
  }

  getAllBPFC() {
    this.bPFCEstablishService.filterByApprovedStatus().subscribe((res: any) => {
      this.BPFCs = res.map((item) => {
        return {
          id: item.id,
          name: `${item.modelName} - ${item.modelNo} - ${item.articleNo} - ${item.artProcess}`,
        };
      });
    });
  }

  getAll(startDate, endDate) {
    this.planService.search(startDate.toDateString(), endDate.toDateString()).subscribe((res: any) => {
      this.data = res.map(item => {
        return {
          id: item.id,
          bpfcName: `${item.modelName} - ${item.modelNoName} - ${item.articleName} - ${item.processName}`,
          dueDate: item.dueDate,
          createdDate: item.createdDate,
          workingHour: item.workingHour,
          hourlyOutput: item.hourlyOutput,
          buildingName: item.buildingName,
          buildingID: item.buildingID,
          bpfcEstablishID: item.bpfcEstablishID,
          glues: item.glues || []
        };
      });
    });
  }
  deleteRange(plans) {
    this.alertify.confirm('Delete Plan', 'Are you sure you want to delete this Plans ?', () => {
      this.planService.deleteRange(plans).subscribe(() => {
        this.getAll(this.startDate, this.endDate);
        this.alertify.success('Plans has been deleted');
      }, error => {
        this.alertify.error('Failed to delete the Modal Name');
      });
    });
  }

  /// Begin API
  openModal(ref) {
    const selectedRecords = this.grid.getSelectedRecords();
    if (selectedRecords.length !== 0) {
      this.plansSelected = selectedRecords.map((item: any) => {
        return {
          id: 0,
          bpfcEstablishID: item.bpfcEstablishID,
          workingHour: item.workingHour,
          hourlyOutput: item.hourlyOutput,
          dueDate: item.dueDate,
          buildingID: item.buildingID
        };
      });
      this.modalReference = this.modalService.open(ref);
    } else {
      this.alertify.warning('Please select the plan');
    }
  }

  toolbarClick(args: any): void {
    switch (args.item.text) {
      case 'Clone':
        this.openModal(this.cloneModal);
        break;
      case 'Delete Range':
        if (this.grid.getSelectedRecords().length === 0) {
          this.alertify.warning('Please select the plans!!');
        } else {
          const selectedRecords = this.grid.getSelectedRecords().map((item: any) => {
            return item.id;
          });
          console.log('Delete Range', selectedRecords);
          this.deleteRange(selectedRecords);
        }
        break;
      case 'Excel Export':
        this.grid.excelExport();
        break;
      default:
        break;
    }
  }

  onClickClone() {
    this.plansSelected.map(item => {
      item.dueDate = this.date;
    });

    this.planService.clonePlan(this.plansSelected).subscribe((res: any) => {
      if (res) {
        this.alertify.success('Successfully!');
        this.startDate = this.date;
        this.endDate = this.date;
        this.getAll(this.date, this.date);
        this.modalService.dismissAll();
      } else {
        this.alertify.warning('the plans have already existed!');
        this.modalService.dismissAll();
      }
    });
  }

  search(startDate, endDate) {
    this.planService.search(startDate.toDateString(), endDate.toDateString()).subscribe((res: any) => {
      this.data = res.map(item => {
        return {
          id: item.id,
          bpfcName: `${item.modelName} - ${item.modelNoName} - ${item.articleName} - ${item.processName}`,
          dueDate: item.dueDate,
          createdDate: item.createdDate,
          workingHour: item.workingHour,
          hourlyOutput: item.hourlyOutput,
          buildingName: item.buildingName,
          buildingID: item.buildingID,
          bpfcEstablishID: item.bpfcEstablishID,
          glues: item.glues || []
        };
      });
    });
  }


  onClickDefault() {
    this.startDate = new Date();
    this.endDate = new Date(new Date().setDate(15));
    this.getAll(this.startDate, this.endDate);
  }
  startDateOnchange(args) {
    this.startDate = (args.value as Date);
    this.search(this.startDate, this.endDate);
  }
  endDateOnchange(args) {
    this.endDate = (args.value as Date);
    this.search(this.startDate, this.endDate);
  }
  tooltip(data) {
    if (data) {
      const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
      const glues = [];
      for (const item of data) {
        if (!array.includes(item)) {
          glues.push(item);
        }
      }
      return glues.join('<br>');
    } else {
      return '';
    }
  }

  onClickFilter() {
    this.search(this.startDate, this.endDate);
  }

  // End API
}
