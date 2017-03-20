import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quill-example-03',
  template: `
            <div id="toolbar">
              <!-- Add a bold button -->
              <button class="ql-bold">Bold</button>
              <button class="ql-italic">Italic</button>
              <!-- Add font size dropdown -->
              <select class="ql-size">
                <option value="small"></option>
                <!-- Note a missing, thus falsy value, is used to reset to default -->
                <option selected></option>
                <option value="large"></option>
                <option value="huge"></option>
              </select>
              <!-- Add subscript and superscript buttons -->
              <button class="ql-script" value="sub"></button>
              <button class="ql-script" value="super"></button>
              <button style="width: 120px" (click)="customButtonClick()">custom button</button>
            </div>
            <quill-editor  [(ngModel)]="editorContent"
                           [options]="editorConfig"
                           (blur)="onEditorBlured($event)"
                           (focus)="onEditorFocused($event)"
                           (ready)="onEditorCreated($event)"
                           (change)="onContentChanged($event)">
            </quill-editor>`,
  styles: [
    `
     .quill-editor {
       min-height: 16em;
       max-height: 20em;
       overflow-y: auto;
     }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class QuillEditorComponentExample03 {

  public editor;
  public editorContent = `<h3>I am Example 03</h3>`;
  public editorConfig = {
    placeholder: "输入公告内容，支持html",
    modules: {
      toolbar: '#toolbar'
    }
  };

  constructor() {}

  onEditorBlured(quill) {
    // console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    // console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    // console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
  }

  customButtonClick() {
    alert(`You can custom the button and listen click event to do something...\n你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储...等等`)
  }

  ngOnInit() {
  }
}
