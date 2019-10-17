<template>
    <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
    </quill-editor>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import * as Quill from 'quill'  //引入编辑器
    
    //quill编辑器的字体
    var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];  
    var Font = Quill.import('formats/font');  
    Font.whitelist = fonts; //将字体加入到白名单 
    Quill.register(Font, true);
    
    export default {
        data:function(){
            return{
                content:'',
                editorOption:{
                    modules:{
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'], 
                            ['blockquote', 'code-block'],

                            [{ 'header': 1 }, { 'header': 2 }],     
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'script': 'sub'}, { 'script': 'super' }],  
                            [{ 'indent': '-1'}, { 'indent': '+1' }],   
                            [{ 'direction': 'rtl' }],               

                            [{ 'size': ['small', false, 'large', 'huge'] }], 
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                            [{ 'color': [] }, { 'background': [] }], 
                            [{ 'font': fonts }],       //把上面定义的字体数组放进来

                            [{ 'align': [] }],

                            ['clean']
                            
                        ]
                    },
                    theme:'snow'
                }
            }
        }
    }
</script>

<style>

</style>