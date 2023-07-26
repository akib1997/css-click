import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GridService } from '../../services/grid.service';
import { displayGridValues } from '@app/core/enums/grid/enum-grid';
import { IGrid } from '@app/models/grid/grid.model';

@Component({
  selector: 'grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss']
})
export class GridFormComponent implements OnInit {
  displyValues = displayGridValues
  form: FormGroup<IGridForm>;
  constructor(
    private fb: FormBuilder,
    private gridService: GridService
  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  updateGridValue(data: any): void {
    // this.flexService.setFlexValue(data)
  }

  initializeForm(): void {
    this.form = this.fb.group<IGridForm>({
      display: this.fb.control(this.gridService.initialValues.display, [Validators.required]),
      // gridTemplateColumns: this.fb.array([this.gridService.initialValues.gridTemplateColumns], [Validators.required]),
      // gridTemplateRows: this.fb.array(this.gridService.initialValues.gridTemplateRows, [Validators.required])
    });

    this.form.valueChanges.subscribe(data => {
      this.updateGridValue(data);
      // this.updateState(data);
    })
  }

}

type IGridForm = {
  [d in keyof Pick<IGrid, 'display'>]: FormControl<IGrid[d] | null>;
  // gridTemplateColumns: AbstractControl<(number| null)[]>
}

interface TypedForm {
  // roles: FormArray<(number | null)[]>
}
