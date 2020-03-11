# THIS PROJECT IS DEPRECATED

❌ Component is not maintained anymore.

✅ Please consider using [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill).

---

[![GitHub issues](https://img.shields.io/github/issues/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/ngx-quill-editor.svg?style=flat-square)](https://github.com/surmon-china/ngx-quill-editor/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/surmon-china/ngx-quill-editor/master/LICENSE)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)


# ngx-quill-editor
Quill editor for AngularX.

基于 Quill、适用于 AngularX 的富文本编辑器。


# Example
[Demo Page](https://surmon-china.github.io/ngx-quill-editor)


### Installation

``` bash
npm install ngx-quill-editor --save
```

### Sample

Include QuillEditorModule in your main module:
``` typescript
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  // ...
  imports: [
    QuillEditorModule
  ],
  // ...
})
export class AppModule {}
```

Then use it in your component:

``` html
<!-- use with ngModel -->
<quill-editor
  [(ngModel)]="editorContent"
  [options]="editorOptions"
  (blur)="onEditorBlured($event)"
  (focus)="onEditorFocused($event)"
  (ready)="onEditorCreated($event)"
  (change)="onContentChanged($event)"
></quill-editor>


<!-- or use with formControl -->
<quill-editor
  class="form-control"
  [formControl]="editorContent"
  [options]="editorOptions"
  (blur)="onEditorBlured($event)"
  (focus)="onEditorFocused($event)"
  (ready)="onEditorCreated($event)"
  (change)="onContentChanged($event)"
></quill-editor>
```

``` javascript
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: require('./sample.html')
})
export class Sample {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  constructor() {}

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
  }
}
```

### Configuration
- options : The configuration object for quill see https://quilljs.com/docs/quickstart/
