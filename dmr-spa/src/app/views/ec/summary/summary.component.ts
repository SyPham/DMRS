import { SignalrService } from './../../../_core/_service/signalr.service';
import { DataService } from './../../../_core/_service/data.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  ViewChildren,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ColumnModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { PlanService } from 'src/app/_core/_service/plan.service';
import * as signalr from '../../../../assets/js/ec-client.js';
import { AuthService } from 'src/app/_core/_service/auth.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MakeGlueService } from 'src/app/_core/_service/make-glue.service';
import { AlertifyService } from 'src/app/_core/_service/alertify.service';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { EmitType } from '@syncfusion/ej2-base/';
import { Query } from '@syncfusion/ej2-data/';
import { DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';
import { IngredientService } from 'src/app/_core/_service/ingredient.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AbnormalService } from 'src/app/_core/_service/abnormal.service.js';
import { TooltipComponent, Position } from '@syncfusion/ej2-angular-popups';
import { BuildingService } from 'src/app/_core/_service/building.service';
import { IBuilding } from 'src/app/_core/_model/building';
import { SettingService } from 'src/app/_core/_service/setting.service';
const UNIT_BIG_MACHINE = 'k';
const UNIT_SMALL_MACHINE = 'g';
const BUILDING_LEVEL = 2;
declare var $: any;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent implements OnInit, AfterViewInit {
  public ADMIN = 1;
  public SUPERVISOR = 2;
  public IsAdmin = false;
  @ViewChild('fullScreen') divRef;
  @ViewChildren('tooltip') tooltip: QueryList<any>;
  @ViewChild('tooltip') public control: TooltipComponent;
  @ViewChild('scanQRCode') scanQRCodeElement: ElementRef;
  @ViewChild('deliveredGrid') deliveredGrid: GridComponent;
  public filterSettings: object;
  public displayTextMethod: DisplayTextModel = {
    visibility: false,
  };
  @ViewChild('scanText', { static: false }) scanText: ElementRef;
  // make glue
  public ingredients: any;
  public show = false;
  public makeGlue = {
    id: 0,
    name: '',
    code: '',
    ingredients: [],
  };
  public weight: any;
  public glue: any;
  public glueID: number;
  public glueName: number;
  public quantity: string;
  public building = JSON.parse(localStorage.getItem('building'));
  public role = JSON.parse(localStorage.getItem('level'));
  public A: any;
  public B: any;
  public C: any;
  public D: any;
  public E: any;
  public existGlue: any = false;
  public deliveredData: any;
  @ViewChild('ddlelement') public dropDownListObject1: DropDownListComponent;
  public guidances: any;
  public guidance: any;
  // end make glue
  public data: object[] = [];
  public lineColumns: ColumnModel[];
  linevalue: any;
  public buildingID: any;
  connection: any;
  @ViewChild('grid')
  grid: GridComponent;
  screenHeight: number;
  showQRCode: boolean;
  qrCode: any;
  scanStatus: boolean;
  dateTimeNow: Date;
  code: any;
  disabled = true;
  hasWarning: boolean;
  cancel = false;
  hasFullScreen = false;
  modalReference: NgbModalRef;
  public editSettings: object;
  toolbarOptions: string[];
  modelNameList: any;
  rowParents: any;
  volume: any;
  position: any;
  volumeA = 0;
  volumeB: any;
  volumeC: any;
  volumeD: any;
  volumeE: any;
  volumeH: any;
  min = 0;
  max = 0;
  scalingKG = '2';
  scalingG = '2';
  dataSignal: any;
  unit: string;
  ingredientsTamp: [];
  public fieldsBuildings: object = { text: 'name', value: 'id' };
  buildings: IBuilding[];
  buildingName: any;
  scalingSetting: any;
  @HostListener('window:keyup.alt.enter', ['$event']) enter(e: KeyboardEvent) {
    if (!this.disabled) {
      this.Finish();
    }
  }
  @HostListener('window:keyup.esc', ['$event']) keyup(e: KeyboardEvent) {
    this.summary();
  }
  @HostListener('document:fullscreenchange', ['$event']) fullScreen(e) {
    if (document.fullscreenElement !== null) {
      this.screenHeight = screen.height - 100;
      this.hasFullScreen = true;
    } else {
      this.screenHeight = window.innerHeight - 200;
      this.hasFullScreen = false;
    }
  }
  constructor(
    private planService: PlanService,
    private settingService: SettingService,
    private dataService: DataService,
    private buildingService: BuildingService,
    public modalService: NgbModal,
    public ingredientService: IngredientService,
    private makeGlueService: MakeGlueService,
    private abnormalService: AbnormalService,
    private alertify: AlertifyService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public signalRService: SignalrService,
    private spinner: NgxSpinnerService
  ) { }

  public ngOnInit(): void {
    // deactivate the change detection for this component and its children
    this.cdr.detach();
    // interval for doing the change detection every 5 seconds
    setInterval(() => {
      this.cdr.detectChanges();
    }, 300);
    this.toolbarOptions = ['Edit', 'Delete', 'Search', 'ExcelExport'];
    this.editSettings = {
      showDeleteConfirmDialog: false,
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
    };
    this.filterSettings = { type: 'Excel' };
    this.showQRCode = false;
    this.disabled = true;
    this.qrCode = '';
    this.existGlue = true;
    this.hasWarning = false;
    this.connection = signalr.CONNECTION_HUB;
    this.checkRole();
    if (signalr.CONNECTION_HUB.state === 'Connected') {
      signalr.CONNECTION_HUB.on('summaryRecieve', (status) => {
        if (status === 'ok') {
          this.summary();
        }
      });
    }
  }
  private getScalingSetting() {
    this.settingService.getMachineByBuilding(this.buildingID).subscribe((data: any) => {
      this.scalingSetting = data.map(item => item.machineID);
    });
  }
  public ngAfterViewInit(): void {
    this.screenHeight = window.innerHeight;

    $('input.mixing').tooltip({
      placement: 'right',
      trigger: 'focus',
    });
  }
  public onFilteringBuilding: EmitType<FilteringEventArgs> = (
    e: FilteringEventArgs
  ) => {
    let query: Query = new Query();
    // frame the query based on search string with filter type.
    query =
      e.text !== '' ? query.where('name', 'contains', e.text, true) : query;
    // pass the filter data source, filter query to updateData method.
    e.updateData(this.buildings as any, query);
  }
  onChangeBuilding(args) {
    this.buildingID = args.itemData.id;
    this.buildingName = args.itemData.name;
    localStorage.setItem('buildingID', args.itemData.id );
    this.getScalingSetting();
    this.summary();
  }
  actionBegin(args) {
    if (args.requestType === 'delete') {
      const id = args.data[0].id;
      this.planService.deleteDelivered(id).subscribe((res) => {
        if (res) {
          this.modalReference.close();
          this.summary();
        }
      });
    }
    if (args.requestType === 'save') {
      if (args.action === 'edit') {
        const id = args.data.id;
        const qty = args.data.qty;
        this.planService.editDelivered(id, qty).subscribe((res) => {
          if (res) {
            this.modalReference.close();
            this.summary();
          }
        });
      }
    }
  }
  showModal(name, value) {
    this.modalReference = this.modalService.open(name, { size: 'lg' });
    this.deliveredData = value.deliveredInfos.map((item: any) => {
      return {
        id: item.id,
        glueName: item.glueName,
        qty: item.qty,
        createdDate: new Date(item.createdDate),
      };
    });
  }
  openFullscreen() {
    // Use this.divRef.nativeElement here to request fullscreen
    const elem = this.divRef.nativeElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    this.screenHeight = window.innerHeight;
    this.hasFullScreen = true;
  }
  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (window.top.document as any).msExitFullscreen();
    }
    this.hasFullScreen = false;
    this.screenHeight = window.innerHeight - 403;
  }
  labelLang(text) {
    if (text === 'Chemical') {
      return 'GLUE';
    }
    if (text === 'GlueID') {
      return 'ID';
    }
    if (text === 'Supplier') {
      return 'SUPPLIER_LABEL';
    }
    if (text === 'TotalConsumption') {
      return 'TOTAL_COMSUMPTION';
    }
    if (text === 'Standard') {
      return 'STANDARD';
    }
    if (text === 'Real') {
      return 'ACTUAL_TODOLIST';
    }
    if (text === 'Count') {
      return 'COUNT';
    }
    return text;
  }
  stirGlue(values) {
    // this.dataService.changeMessage(2);
    this.ingredientService.changeIngredient(values.glueName.glueName);
    const url = '/ec/execution/todolist/stir/' + values.glueName.glueName;
    return this.router.navigate([url]);
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
  summary() {
    this.spinner.show();
    this.planService.summary(this.buildingID).subscribe((res: any) => {
      this.lineColumns = res.header;
      this.data = res.data;
      this.rowParents = res.rowParents;
      this.modelNameList = res.modelNameList;
      this.spinner.hide();
    });

  }

  hasLineValue(value) {
    const labels = [
      'Chemical',
      'GlueID',
      'Real',
      'Standard ',
      'Supplier',
      'Count',
    ];
    for (const key in value) {
      if (labels.includes(key)) {
        return true;
      }
    }
  }

  hasRowspan(index) {
    const labels = [
      'Chemical',
      'Real',
      'GlueID',
      'Standard',
      'Supplier',
      'Count',
      'TotalConsumption',
      'Delivered',
    ];
    return labels.includes(this.lineColumns[index + 1].field);
  }

  hasValue(col, cell) {
    if (col.field === Object.keys(cell).toString()) {
      return true;
    }
    return false;
  }

  hasObject(value) {
    if (value instanceof Object) {
      return true;
    }
    return false;
  }

  hasArray(value) {
    if (value instanceof Array) {
      return true;
    }
    return false;
  }

  // api
  hasLock(ingredient, building, batch): Promise<any> {
    let buildingName = building;
    if (this.IsAdmin) {
      buildingName = this.buildingName;
    }
    return new Promise((resolve, reject) => {
      this.abnormalService.hasLock(ingredient, buildingName, batch).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(false);
        }
      );
    });
  }

  checkIncoming(ingredient, building, batch): Promise<any> {
    let buildingName = building;
    if (this.IsAdmin) {
      buildingName = this.buildingName;
    }
    return new Promise((resolve, reject) => {
      this.ingredientService
        .checkIncoming(ingredient, batch, buildingName)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(false);
          }
        );
    });
  }
  //
  getValueCell(cellObject) {
    return Object.values(cellObject);
  }
  cells(values) {
    delete values.rowCountInfo;
    delete values.rowRealInfo;
    return values;
  }

  getCellValue(values): any {
    const res = Object.values(values).filter((item) => {
      return !this.hasArray(item);
    });

    return res;
  }
  private checkRole(): void {
    const roles = [this.ADMIN, this.SUPERVISOR];
    if (roles.includes(this.role.id)) {
      this.IsAdmin = true;
      this.getBuilding();
      const buildingId = +localStorage.getItem('buildingID');
      if (buildingId === 0) {
        this.alertify.message('Please select a building!', true);
      } else {
        this.buildingID = buildingId;
      }
    } else {
      this.buildingID = this.building.id;
      this.getScalingSetting();
      this.summary();
    }
  }
  private getBuilding(): void {
    this.buildingService.getBuildings().subscribe(async (buildingData) => {
      this.buildings = buildingData.filter(item => item.level === BUILDING_LEVEL);
    });
  }
  // make glue
  findIngredientRealByPosition(position) {
    let real = 0;
    for (const item of this.ingredients) {
      if (item.position === position) {
        if (item.unit === UNIT_BIG_MACHINE) {
          real = item.real;
        } else {
          real = (item.real) / 1000;
        }
        break;
      }
    }
    return real;
  }

  findIngredientBatchByPosition(position) {
    let batch = '';
    for (const item of this.ingredients) {
      if (item.position === position) {
        batch = item.batch;
        break;
      }
    }
    return batch;
  }

  Finish() {
    if (this.IsAdmin) {
      this.alertify.warning(`Only the workers are able to press "Finished" button!<br> Chỉ có công nhân mới được nhấn "Hoàn Thành!"`, true);
      return;
    }
    const date = new Date();
    const buildingID = this.building.id;
    this.guidances = {
      id: 0,
      glueID: this.glueID,
      glueName: this.makeGlue.name,
      chemicalA: this.findIngredientRealByPosition('A'),
      chemicalB: this.findIngredientRealByPosition('B'),
      chemicalC: this.findIngredientRealByPosition('C'),
      chemicalD: this.findIngredientRealByPosition('D'),
      chemicalE: this.findIngredientRealByPosition('E'),
      batchA: this.findIngredientBatchByPosition('A'),
      batchB: this.findIngredientBatchByPosition('B'),
      batchC: this.findIngredientBatchByPosition('C'),
      batchD: this.findIngredientBatchByPosition('D'),
      batchE: this.findIngredientBatchByPosition('E'),
      createdTime: date,
      mixBy: JSON.parse(localStorage.getItem('user')).User.ID,
      buildingID,
    };
    signalr.SCALING_CONNECTION_HUB.on('Welcom');
    if (this.guidances) {
      this.makeGlueService.Guidance(this.guidances).subscribe((glue: any) => {
        this.alertify.success('The Glue has been finished successfully');
        this.showQRCode = true;
        this.code = glue.code;
        this.back();
        this.summary();
      });
    }
  }

  gotoStir() {
    // this.dataService.changeMessage(2);
    const url = '/ec/execution/todolist/stir/' + this.makeGlue.name;
    return this.router.navigate([url]);
  }

  getGlueWithIngredientByGlueName(glueName: string) {
    this.makeGlueService
      .getGlueWithIngredientByGlueName(glueName)
      .subscribe((res: any) => {
        this.show = true;
        this.existGlue = false;
        this.makeGlue = res;
        this.ingredients = res.ingredients.map((item) => {
          return {
            id: item.id,
            scanStatus: item.position === 'A',
            code: item.code,
            materialNO: item.materialNO,
            scanCode: '',
            name: item.name,
            percentage: item.percentage,
            position: item.position,
            allow: item.allow,
            expected: 0,
            real: 0,
            focusReal: false,
            focusExpected: false,
            valid: false,
            info: '',
            batch: '',
          };
        });
      });
  }

  getGlueWithIngredientByGlueID(glueID: number) {
    this.makeGlueService
      .getGlueWithIngredientByGlueID(glueID)
      .subscribe((res: any) => {
        this.show = true;
        // this.dataService.setValue(true);
        this.existGlue = false;
        this.makeGlue = res;
        this.ingredients = res.ingredients.map((item) => {
          return {
            id: item.id,
            scanStatus: item.position === 'A',
            code: item.code,
            scanCode: '',
            materialNO: item.materialNO,
            name: item.name,
            percentage: item.percentage,
            position: item.position,
            allow: item.allow,
            expected: 0,
            real: 0,
            focusReal: false,
            focusExpected: false,
            valid: false,
            info: '',
            batch: '',
            unit: ''
          };
        });
      });
  }

  signal() {
    if (signalr.SCALING_CONNECTION_HUB.state === 'Connected') {
      signalr.SCALING_CONNECTION_HUB.on(
        'Welcom',
        (scalingMachineID, message, unit) => {
          if (this.scalingSetting.includes(+scalingMachineID)) {
            if (unit === this.scalingKG) {
              this.volume = parseFloat(message);
              this.unit = unit;
              // console.log('Unit', unit);
              /// update real A sau do show real B, tinh lai expected
              switch (this.position) {
                case 'A':
                  this.volumeA = this.volume;
                  break;
                case 'B':
                  if (unit === UNIT_BIG_MACHINE) {
                    this.volumeB = this.volume;
                    this.changeActualByPosition('A', this.volumeB, unit);
                    this.checkValidPosition(this.ingredientsTamp, this.volumeB);
                  } else {
                    this.changeActualByPosition('A', this.volumeB, unit);
                    this.checkValidPosition(this.ingredientsTamp, this.volumeB);
                  }
                  break;
                case 'C':
                  this.volumeC = this.volume;
                  this.changeActualByPosition('B', this.volumeC, unit);
                  this.checkValidPosition(this.ingredientsTamp, this.volumeC);
                  break;
                case 'D':
                  this.volumeD = this.volume;
                  this.changeActualByPosition('C', this.volumeD, unit);
                  this.checkValidPosition(this.ingredientsTamp, this.volumeD);
                  break;
                case 'E':
                  this.volumeE = this.volume;
                  this.changeActualByPosition('D', this.volumeE, unit);
                  this.checkValidPosition(this.ingredientsTamp, this.volumeE);
                  break;
                case 'H':
                  this.volumeH = this.volume;
                  this.changeActualByPosition('E', this.volumeH, unit);
                  this.checkValidPosition(this.ingredientsTamp, this.volumeH);
                  break;
              }
            }
          }
        }
      );
    }
  }

  scanQRCode(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ingredientService.scanQRCode(this.qrCode).subscribe((res: any) => {
        if (res == null) {
          reject(null);
        } else {
          resolve(res);
        }
      });
    });
  }

  setBatch(item, batch) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].id === item.id) {
        this.ingredients[i].batch = batch;
        break;
      }
    }
  }

  async onNgModelChangeScanQRCode2(args, item) {
    const input = args;
    if (input.length === 8) {
      try {
        this.qrCode = input;
        const result = await this.scanQRCode();
        if (this.qrCode !== item.code) {
          this.alertify.warning(
            `Please you should look for the chemical name "${item.name}"`
          );
          this.qrCode = '';
          this.errorScan();
          return;
        }
        // const checkLock = await this.hasLock(item.name, this.level.name, input[1]);
        // if (checkLock === true) {
        //   this.alertify.error('This chemical has been locked!');
        //   this.qrCode = '';
        //   this.errorScan();
        //   return;
        // }
        const code = result.code;
        const ingredient = this.findIngredientCode(code);
        const batch = 'DEFAULT';
        this.setBatch(ingredient, batch);
        if (ingredient) {
          this.changeInfo('success-scan', ingredient.code);
          if (ingredient.expected === 0 && ingredient.position === 'A') {
            this.changeFocusStatus(ingredient.code, false, true);
            this.changeScanStatus(ingredient.code, false);
          } else {
            this.changeScanStatus(ingredient.code, false);
            this.changeFocusStatus(code, true, false);
          }
        }
      } catch (error) {
        this.errorScan();
        this.alertify.error('Wrong Chemical!');
        this.qrCode = '';
      }
    }
  }

  onFocusScanQRCode(args, item) { }

  // khi scan qr-code
  async onNgModelChangeScanQRCode(args, item) {
    this.ingredientsTamp = item;
    this.position = item.position;
    const input = args.split('-') || [];
    if (input[2]?.length === 8) {
      try {
        this.qrCode = input[2];
        const result = await this.scanQRCode();
        if (this.qrCode !== item.materialNO) {
          this.alertify.warning(`Please you should look for the chemical name "${item.name}"`);
          this.qrCode = '';
          this.errorScan();
          return;
        }
        // const checkIncoming = await this.checkIncoming(item.name, this.level.name, input[1]);
        // if (checkIncoming === false) {
        //   this.alertify.error(`Invalid!`);
        //   this.qrCode = '';
        //   this.errorScan();
        //   return;
        // }

        const checkLock = await this.hasLock(
          item.name,
          this.building.name,
          input[1]
        );
        if (checkLock === true) {
          this.alertify.error('This chemical has been locked!');
          this.qrCode = '';
          this.errorScan();
          return;
        }

        /// Khi quét qr-code thì chạy signal
        this.signal();

        const code = result.code;
        const ingredient = this.findIngredientCode(code);
        this.setBatch(ingredient, input[1]);
        if (ingredient) {
          this.changeInfo('success-scan', ingredient.code);
          if (ingredient.expected === 0 && ingredient.position === 'A') {
            this.changeFocusStatus(ingredient.code, false, true);
            this.changeScanStatus(ingredient.code, false);
          } else {
            this.changeScanStatus(ingredient.code, false);
            this.changeFocusStatus(code, false, false);
          }
        }
        // chuyển vị trí quét khi scan
        switch (this.position) {
          case 'B':
            this.changeScanStatusByPosition('C', true);
            break;
          case 'C':
            this.changeScanStatusByPosition('C', false);
            this.changeScanStatusByPosition('D', true);
            break;
          case 'D':
            this.changeScanStatusByPosition('E', true);
            break;
          case 'E':
            this.changeScanStatusByPosition('H', true);
            break;
        }
      } catch (error) {
        this.errorScan();
        this.alertify.error('Wrong Chemical!');
        this.qrCode = '';
      }
    }
  }

  private errorScan() {
    for (const key in this.ingredients) {
      if (this.ingredients[key].scanStatus) {
        const element = this.ingredients[key];
        this.changeInfo('error-scan', element.code);
      }
    }
  }

  showArrow(item): boolean {
    if (item.position === 'A' && item.scanStatus === true) {
      return true;
    }
    if (item.position === 'A' && item.scanStatus === false && item.focusExpected === true) {
      return true;
    }
    if (item.position !== 'A' && item.scanStatus === true) {
      return true;
    }
    return false;
  }

  mixingSection(data) {
    this.glueName = data.glueName.glueName;
    this.glueID = data.glueID;
    this.glue = data;
    this.scanStatus = true;
    // Nhan pha keo thi gan mac dinh la can to
    this.scalingKG = UNIT_BIG_MACHINE;
    this.getGlueWithIngredientByGlueID(this.glueID);
  }

  calculatorIngredient(weight, percentage) {
    const result = (weight * percentage) / 100;
    return result * 1000 ?? 0;
  }

  onKeyupExpected(item, args) {
    if (args.keyCode === 13) {
      if (item.position === 'A') {
        this.changeExpected('A', args.target.value);
        switch (item.position) {
          case 'A':
            this.changeScanStatusByPosition('B', true);
            break;
          case 'B':
            this.changeScanStatusByPosition('C', true);
            break;
          case 'C':
            this.changeScanStatusByPosition('D', true);
            break;
          case 'D':
            this.changeScanStatusByPosition('E', true);
            break;
        }
        this.resetFocusExpectedAndActual();
      }
    }
  }

  resetIngredientFocus() {
    this.ingredients = this.ingredients.map((item) => {
      return {
        id: item.id,
        scanStatus: true,
        code: item.code,
        materialNO: item.materialNO,
        name: item.name,
        percentage: item.percentage,
        position: item.position,
        allow: item.allow,
        expected: 0,
        real: 0,
        focusReal: false,
        focusExpected: false,
        batch: '',
      };
    });
  }
  changeExpectedRange(args, position) {
    const positionArray = ['A', 'B', 'C', 'D', 'E'];
    if (positionArray.includes(position)) {
      const weight = parseFloat(args);
      const expected = this.calculatorIngredient(
        weight,
        this.findIngredient(position)?.percentage
      );
      if (position === 'B') {
        this.B = expected;
      }
      if (position === 'C') {
        this.C = expected;
      }
      if (position === 'D') {
        this.D = expected;
      }
      const allow = this.calculatorIngredient(
        expected / 1000,
        this.findIngredient(position)?.allow
      );
      const min = expected - allow;
      const max = expected + allow;
      const minRange = this.toFixedIfNecessary(min / 1000, 3);
      const maxRange = this.toFixedIfNecessary(max / 1000, 3);
      const expectedRange =
        maxRange > 3
          ? `${minRange}kg - ${maxRange}kg`
          : ` ${this.toFixedIfNecessary(min, 1)}g - ${this.toFixedIfNecessary(max, 1)}g `;
      if (allow === 0) {
        const kgValue = this.toFixedIfNecessary(expected / 1000, 3);
        // tslint:disable-next-line:no-shadowed-variable
        const expectedRange = kgValue > 3 ? `${kgValue}kg` : ` ${this.toFixedIfNecessary(kgValue * 1000, 1)}g`;
        this.changeExpected(position, expectedRange);
      } else {
        this.changeExpected(position, expectedRange);
      }
    }
  }
  checkValidPosition(ingredient, args) {
    let min;
    let max;
    let minG;
    let maxG;
    const currentValue = parseFloat(args);

    if (ingredient.allow === 0) {
      const unit = ingredient.expected.replace(/[0-9|.]+/g, '').trim();
      if (unit === UNIT_BIG_MACHINE) {
        min = parseFloat(ingredient.expected);
        max = parseFloat(ingredient.expected);
      } else {
        minG = parseFloat(ingredient.expected);
        maxG = parseFloat(ingredient.expected);
        min = parseFloat(ingredient.expected) / 1000;
        max = parseFloat(ingredient.expected) / 1000;
      }
    } else {
      const exp2 = ingredient.expected.split('-');
      const unit = exp2[0].replace(/[0-9|.]+/g, '').trim();
      if (unit === UNIT_BIG_MACHINE) {
        min = parseFloat(exp2[0]);
        max = parseFloat(exp2[1]);
      } else {
        minG = parseFloat(exp2[0]);
        maxG = parseFloat(exp2[1]);
        min = parseFloat(exp2[0]) / 1000;
        max = parseFloat(exp2[1]) / 1000;
      }
    }

    // Nếu Chemical là A, focus vào chemical B
    if (ingredient.position === 'A') {
      const positionArray = ['B', 'C', 'D', 'E'];
      for (const position of positionArray) {
        this.changeExpectedRange(args, position);
      }
      this.changeScanStatusFocus('A', false);
      this.changeScanStatusFocus('B', true);
      this.changeFocusStatus(ingredient.code, false, false);
      if (this.ingredients.length === 1) {
        this.disabled = false;
      }
    }

    // Nếu Chemical là B, focus vào chemical C
    if (ingredient.position === 'B') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('B', false);
          this.changeScanStatusFocus('C', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 2) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('B', false);
          this.changeScanStatusFocus('C', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 2) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    // Nếu Chemical là C, focus vào chemical D
    if (ingredient.position === 'C') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('C', false);
          this.changeScanStatusFocus('D', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 3) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('C', false);
          this.changeScanStatusFocus('D', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 3) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    // Nếu Chemical là D, focus vào chemical E
    if (ingredient.position === 'D') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    if (ingredient.position === 'E') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }
    // console.log('change real', this.ingredients);
    this.changeReal(ingredient.code, args);
  }
  onDblClicked(ingredient, args) {
    this.ingredients.forEach( (part, index, theArray) => {
      this.ingredients[index].scanStatus = false;
    });
    ingredient.focusReal = true;
    signalr.SCALING_CONNECTION_HUB.off('Welcom');
  }
  checkValidPositionForRealEvent(ingredient, args) {
    let min;
    let max;
    let minG;
    let maxG;
    const currentValue = parseFloat(args.target.value);

    if (ingredient.allow === 0) {
      const unit = ingredient.expected.replace(/[0-9|.]+/g, '').trim();
      if (unit === UNIT_BIG_MACHINE) {
        min = parseFloat(ingredient.expected);
        max = parseFloat(ingredient.expected);
        for (const key in this.ingredients) {
          if (this.ingredients[key].id === ingredient.id) {
            this.ingredients[key].valid = currentValue !== max;
            this.ingredients[key].real = currentValue;
            break;
          }
        }
      } else {
        minG = parseFloat(ingredient.expected);
        maxG = parseFloat(ingredient.expected);
        min = parseFloat(ingredient.expected) / 1000;
        max = parseFloat(ingredient.expected) / 1000;
        for (const key in this.ingredients) {
          if (this.ingredients[key].id === ingredient.id) {
            this.ingredients[key].valid = currentValue <= minG || currentValue >= maxG;
            this.ingredients[key].real = currentValue;
            break;
          }
        }
      }
    } else {
      const exp2 = ingredient.expected.split('-');
      const unit = exp2[0].replace(/[0-9|.]+/g, '').trim();
      if (unit === UNIT_BIG_MACHINE) {
        min = parseFloat(exp2[0]);
        max = parseFloat(exp2[1]);
        for (const key in this.ingredients) {
          if (this.ingredients[key].id === ingredient.id) {
            this.ingredients[key].valid = currentValue !== max;
            this.ingredients[key].real = currentValue;
            break;
          }
        }
      } else {
        minG = parseFloat(exp2[0]);
        maxG = parseFloat(exp2[1]);
        min = parseFloat(exp2[0]) / 1000;
        max = parseFloat(exp2[1]) / 1000;
        for (const key in this.ingredients) {
          if (this.ingredients[key].id === ingredient.id) {
            this.ingredients[key].valid = currentValue <= minG || currentValue >= maxG;
            this.ingredients[key].real = currentValue;
            break;
          }
        }
      }
    }
    // Nếu Chemical là A, focus vào chemical B
    if (ingredient.position === 'A') {
      const positionArray = ['B', 'C', 'D', 'E'];
      for (const position of positionArray) {
        this.changeExpectedRange(args, position);
      }
      this.changeScanStatusFocus('A', false);
      this.changeScanStatusFocus('B', true);
      this.changeFocusStatus(ingredient.code, false, false);
      if (this.ingredients.length === 1) {
        this.disabled = false;
      } else {
        signalr.SCALING_CONNECTION_HUB.on('Welcom');
      }
    }

    // Nếu Chemical là B, focus vào chemical C
    if (ingredient.position === 'B') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('B', false);
          this.changeScanStatusFocus('C', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 2) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('B', false);
          this.changeScanStatusFocus('C', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 2) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    // Nếu Chemical là C, focus vào chemical D
    if (ingredient.position === 'C') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('C', false);
          this.changeScanStatusFocus('D', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 3) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('C', false);
          this.changeScanStatusFocus('D', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length === 3) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    // Nếu Chemical là D, focus vào chemical E
    if (ingredient.position === 'D') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }

    if (ingredient.position === 'E') {
      if (max > 3) {
        this.scalingKG = UNIT_BIG_MACHINE;
        if (currentValue <= max && currentValue >= min) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      } else {
        this.scalingKG = UNIT_SMALL_MACHINE;
        if (currentValue <= maxG && currentValue >= minG) {
          this.changeScanStatusFocus('D', false);
          this.changeScanStatusFocus('E', true);
          this.changeValidStatus(ingredient.code, false);
          this.changeFocusStatus(ingredient.code, false, false);
          if (this.ingredients.length >= 4) {
            this.disabled = false;
          } else {
            signalr.SCALING_CONNECTION_HUB.on('Welcom');
          }
        } else {
          this.disabled = true;
          this.changeFocusStatus(ingredient.code, false, false);
          this.changeValidStatus(ingredient.code, true);
          // this.alertify.warning(`Invalid!`, true);
        }
      }
    }
    // console.log('change real', this.ingredients);
    // this.changeReal(ingredient.code, args);
  }
  onKeyupReal(ingredient, args) {
    if (args.keyCode === 13) {
      this.checkValidPositionForRealEvent(ingredient, args);
      // this.checkValidPosition(item, args);
      // const buildingName = this.building.name;
      // this.UpdateConsumption(item.code, item.batch, item.real);
      // const obj = {
      //   qrCode: ingredient.code,
      //   batch: ingredient.batch,
      //   consump: ingredient.real,
      //   buildingName,
      // };
      // this.UpdateConsumptionWithBuilding(obj);
    }
  }

  UpdateConsumption(code, batch, consump) {
    this.ingredientService
      .UpdateConsumption(code, batch, consump)
      .subscribe(() => { });
  }

  UpdateConsumptionWithBuilding(obj) {
    this.ingredientService.UpdateConsumptionOfBuilding(obj).subscribe(() => { });
  }

  lockClass(item) {
    return item.scanCode === true ? '' : 'lock';
  }

  realClass(item) {
    const validClass = item.valid === true ? ' warning-focus' : '';
    const className = item.info + validClass;
    return className;
  }

  changeScanStatusFocus(position, status) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].position === position) {
        this.ingredients[i].scanStatus = status;
        break; // Stop this loop, we found it!
      }
    }
  }

  changeValidStatus(code, validStatus) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === code) {
        this.ingredients[i].valid = validStatus;
        break; // Stop this loop, we found it!
      }
    }
  }

  findIngredient(position) {
    for (const item of this.ingredients) {
      if (item.position === position) {
        return item;
      }
    }
  }

  findIngredientCode(code) {
    for (const item of this.ingredients) {
      if (item.code === code) {
        return item;
      }
    }
  }

  findIngredientPositon(position) {
    for (const item of this.ingredients) {
      if (item.position === position) {
        return item;
      }
    }
  }

  toFixedIfNecessary(value, dp) {
    return +parseFloat(value).toFixed(dp);
  }

  scanChemicalA() {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === 'A') {
        this.ingredients[i].scanStatus = true;
        break; // Stop this loop, we found it!
      }
    }
  }

  changeInfo(info, code) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === code) {
        this.ingredients[i].info = info;
        break; // Stop this loop, we found it!
      }
    }
  }

  changeScanStatus(code, scanStatus) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === code) {
        this.ingredients[i].scanStatus = scanStatus;
        break; // Stop this loop, we found it!
      }
    }
  }

  changeScanStatusByPosition(position, scanStatus) {
    this.position = position;
    for (const i in this.ingredients) {
      if (this.ingredients[i].position === position) {
        this.ingredients[i].scanStatus = scanStatus;
        break;
        // Stop this loop, we found it!
      }
    }
  }

  resetFocusExpectedAndActual() {
    let i;
    for (i = 0; i < this.ingredients.length; i++) {
      this.ingredients[i].focusReal = false;
      this.ingredients[i].focusExpected = false;
    }
  }

  changeActualByPosition(position, actual, unit) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].position === position) {
        this.ingredients[i].real = actual;
        this.ingredients[i].unit = unit;
        break; // Stop this loop, we found it!
      }
    }
  }

  changeFocusStatus(code, focusReal, focusExpected) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === code) {
        this.ingredients[i].focusReal = focusReal;
        this.ingredients[i].focusExpected = focusExpected;
        break; // Stop this loop, we found it!
      }
    }
  }

  allowCaculator(item, expected) {
    if (item.allow === 0) {
      return expected;
    }
    return (item.allow / 100) * expected;
  }

  changeExpected(position, expected) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].position === position) {
        const expectedResult = expected;
        // const expectedResult = this.toFixedIfNecessary(expected, 2);
        this.ingredients[i].expected = expectedResult;
        break; // Stop this loop, we found it!
      }
    }
  }
  changeScanStatusByLength(length, item) {
    switch (length) {
      case 2:
        signalr.SCALING_CONNECTION_HUB.off('Welcom');
        break;
      case 3:
        if (item.position === 'B') {
          this.changeScanStatusByPosition('B', false);
          this.changeScanStatusByPosition('C', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else {
          this.changeScanStatusByPosition('B', false);
          this.changeScanStatusByPosition('C', false);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        }
        break; // Focus C
      case 4:
        if (item.position === 'B') {
          this.changeScanStatusByPosition('B', false);
          this.changeScanStatusByPosition('C', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else if (item.position === 'C') {
          this.changeScanStatusByPosition('C', false);
          this.changeScanStatusByPosition('D', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else {
          this.changeScanStatusByPosition('C', false);
          this.changeScanStatusByPosition('D', false);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        }
        break; // Focus D
      case 5:
        if (item.position === 'B') {
          this.changeScanStatusByPosition('B', false);
          this.changeScanStatusByPosition('C', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else if (item.position === 'C') {
          this.changeScanStatusByPosition('C', false);
          this.changeScanStatusByPosition('D', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else if (item.position === 'D') {
          this.changeScanStatusByPosition('D', false);
          this.changeScanStatusByPosition('E', true);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        } else {
          this.changeScanStatusByPosition('D', false);
          this.changeScanStatusByPosition('E', false);
          signalr.SCALING_CONNECTION_HUB.off('Welcom');
        }
        break; // Focus E
    }
  }
  setActualByExpectedRange(i) {
    const ingredient = this.ingredients[i];
    if (ingredient.allow > 0) {
      const expectedRange = this.ingredients[i].expected.split('-');
      const min = parseFloat(expectedRange[0]);
      const max = parseFloat(expectedRange[1]);
      const actual = this.ingredients[i].real;
      if (actual >= min && actual <= max) {
        const length = this.ingredients.length ?? 0;
        this.changeScanStatusByLength(length, ingredient);
      }
    } else {
      const expected = this.ingredients[i].expected;
      const actual = this.ingredients[i].real;
      if (actual === expected) {
        const length = this.ingredients.length ?? 0;
        this.changeScanStatusByLength(length, ingredient);
      }
    }
  }

  changeReal(code, real) {
    for (const i in this.ingredients) {
      if (this.ingredients[i].code === code) {
        if (this.ingredients[i].position !== 'A') {
          this.setActualByExpectedRange(i);
        }
        this.ingredients[i].real = this.toFixedIfNecessary(real, 3);
        break; // Stop this loop, we found it!
      }
    }
  }
  back() {
    this.existGlue = true;
    this.show = false;
    this.showQRCode = false;
    this.disabled = true;
    this.glue = [];
    this.qrCode = '';
    this.expiredTime = null;

    signalr.SCALING_CONNECTION_HUB.off('Welcom');
    this.dataService.setValue(false);
    // Nhan quay lai thi reset ve can to
    this.scalingKG = UNIT_BIG_MACHINE;
    this.ingredientsTamp = [];
    this.ingredients = [];
  }

  printGlue() {
    const qrcode = document.getElementById('qrcode');
    const glueName = document.getElementById('glueName');
    const glueNameExpiredTime = document.getElementById('glueNameExpiredTime');
    const WindowPrt = window.open(
      '',
      '_blank',
      'left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0'
    );
    WindowPrt.document.write(`
    <html>
      <head>
      </head>
      <body onload="window.print(); window.close()">
        <h1 style="text-align: center"> ${qrcode.innerHTML}</h1>
        <h2 style="text-align: center"> ${glueName.innerHTML}</h2>
        <h2 style="text-align: center"> ${glueNameExpiredTime.innerHTML}</h2>
      </body>
    </html>
    `);
    WindowPrt.document.close();
  }

  // end make glue
  expiredTime() {
    const date = this.dateTimeNow;
    const result = date.setMinutes(date.getMinutes() + this.glue.expiredTime);
    return `${new Date(result).toLocaleDateString()} ${new Date(
      result
    ).toLocaleTimeString()}`;
  }

  onChangeScanQRCode(args) {
    // this.qrCode = args;
    // if (this.qrCode.length === 8) {
    //   this.scanQRCode();
    // }
  }

  pushHistory(data) {
    this.router.navigate([
      `/ec/execution/todolist/history/${data.glueName.glueName}`,
    ]);
  }

  blurTd(data) {
    data.editable = false;
    this.summary();
  }

  editDomain(data: any) {
    if (data.status === false) {
      this.alertify.warning(
        `<ul style="list-style: decimal; color:red">
            <li> Chuyền ${data.line} và ${data.modelName} không sử dụng keo ${data.glueName}!</li>
            <li>Bởi vì trong "Kế Hoạch Làm Việc" không có gán keo ${data.glueName} cho chuyền ${data.line} và ${data.modelName}.</li>
            <li> Nếu "Kế Hoạch Làm Việc" có sự thay đổi thì vui lòng cập nhật lại.</li>
          </ul>
      `,
        true
      );
      return;
    }
    if (data.maxReal === 0) {
      // this.alertify.warning(`This glue ${data.glueName} has not been mixed!!!`);
      this.alertify.warning(
        `Keo ${data.glueName} chưa trộn. Vui lòng hãy trộn keo trước khi giao!<br>
       This glue ${data.glueName} hasn't mixed yet.
      `,
        true
      );
    } else {
      data.editable = !data.editable;
    }
  }

  dispatchGlue(args, data) {
    if (args.key === 'Enter') {
      if (args.target.value === '') {
        return;
      }
      const value = args.target.value || 0;
      const qty = parseFloat(value) || 0;
      if (qty === 0) {
        // this.alertify.warning(`Please enter numeric values ​​only or the value must be greater than 0 !!!`);
        this.alertify.warning(
          `Chỉ nhập số và phải lớn hơn 0.<br>
        Please enter numeric values ​​only or the value must be greater than 0.
        `,
          true
        );
        return;
      }
      // if (data.deliveredTotal === data.maxReal) {
      //   this.alertify.warning(`Đã giao hết keo.<br>`, true);
      //   return;
      // }
      const remainingGlue = this.toFixedIfNecessary(
        data.maxReal - data.deliveredTotal,
        3
      );
      if (remainingGlue === 0) {
        this.alertify.warning(
          `
        Keo ${data.glueName} đã giao hết ${data.deliveredTotal}kg rồi!!!
        `,
          true
        );
        return;
      }
      if (qty > remainingGlue) {
        this.alertify.warning(
          `
        Keo ${data.glueName} đã giao ${data.deliveredTotal}kg còn lại ${remainingGlue}kg. <br>
        Nhập giá trị nhỏ hơn hoặc bằng ${remainingGlue}kg!!!
        `,
          true
        );
        return;
      }
      const obj = {
        glueID: data.glueID,
        glueName: data.glueName,
        buildingID: data.lineID,
        qty: qty + '',
        createdBy: Number(JSON.parse(localStorage.getItem('user')).User.ID),
      };
      // call api here
      this.planService.dispatchGlue(obj).subscribe((res) => {
        if (res) {
          this.alertify.success('Successfully!');
          this.summary();
        }
      });
    }
  }

  frozen(field) {
    // if (field === 'Supplier') {
    //   return 'my-sticky';
    // }
    // if (field === 'Chemical') {
    //   return 'my-sticky-glue';
    // }
  }

  frozenBody(i) {
    // if (i === 0) {
    //   return 'my-sticky';
    // }
    // if (i === 1) {
    //   return 'my-sticky-glue';
    // }
  }

  onBeforeRender(args, data, i) {
    const t = this.tooltip.filter((item, index) => index === i)[0];
    t.content = 'Loading...';
    t.dataBind();
    this.planService
      .getBPFCByGlue(data.glueName.glueName)
      .subscribe((res: any) => {
        t.content = res.join('<br>');
        t.dataBind();
      });
  }

  onBeforeRenderRow2(data) {
    if (data.deliveredInfos.length > 0) {
      const context = data.deliveredInfos.map((x) => {
        return x.qty + '(kg)';
      });
      return context.join(' , ');
    }
    return 'loading...';
  }

  toolbarClick(args): void {
    switch (args.item.text) {
      /* tslint:disable */
      case "Excel Export":
        this.deliveredGrid.excelExport();
        break;
      /* tslint:enable */
      case 'PDF Export':
        break;
    }
  }
}
