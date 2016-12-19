import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quill-example-01',
  template: `<quill-editor [(ngModel)]="editorContent"
                           [config]="editorConfig"
                           (ready)="onEditorCreated($event)">
                           (change)="onContentChanged($event)">
            </quill-editor>
            <br>
            <div class="ql-editor" [innerHTML]="editorContent"></div>`
})
export class QuillEditorComponentExample01 {

  public editorContent = `<p>I am Example 01</p>`;
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };

  constructor() {}

  onEditorCreated(quill) {
    console.log('this is quill object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log(quill, html, text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>i am changed!</h1>'
    }, 1800)
  }
}
