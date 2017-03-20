import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'quill-example-01',
  styles: [`.form-control .quill-editor{overflow: visible;} .form-group { border: 1px solid #ccc; position: relative; } .has-error { border-color: red; } .has-success { border-color: green; }`],
  template: `<form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form">
              <div class="form-group" [ngClass]="{'has-error': (!content.valid && content.touched), 'has-success': (content.valid && content.touched)}">
                <quill-editor class="form-control" [formControl]="content" [options]="editorConfig"></quill-editor>
              </div>
            </form>`,
  encapsulation: ViewEncapsulation.None
})
export class QuillEditorComponentExample01 {

  public form:FormGroup;
  public content:AbstractControl;

  public editorConfig = {
    theme: 'bubble',
    placeholder: "输入任何内容，支持html",
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['link', 'image'],
        ['clean']
      ]
    }
  };

  constructor(private _fb:FormBuilder) {
    this.form = _fb.group({
      'content': ['<p>I am Example 01</p>', Validators.compose([Validators.required])],
    });

    this.content = this.form.controls['content'];
  };

  public submitAnnouncement(values:Object):void {
    if (this.form.valid) {
       console.log('Submit!', values);
    }
  }
}
