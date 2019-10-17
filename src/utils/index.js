import ls from './localStorage';
export default {
    urlParse(query) {
        if (typeof query !== 'string') {
            return {};
        }
        let abj = {},
            reg = /^([^&]*)=([^#&]*)(\/|#|&|$)/,
            matchs = [];
        while (matchs = query.match(reg)) {
            abj[matchs[1]] = decodeURIComponent(matchs[2]);
            query = query.substring(matchs[0].length);
        }
        return abj;
    },
    getArrIndex(arr,key,val){
        for(var i=0;i<arr.length;i++){
            let obj = arr[i];
            if(val==obj[key]){
                return i;
            }
            
        }
    },
    setBodyHei(){
        document.querySelector(".view").style.height =  window.innerHeight+'px';
        // document.getElementById("app").style.height = window.innerHeight+'px';
        window.onresize=function(){
            if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        }
    }
}
export const user={
    set(token){
        ls.setItem("token",token,3);
    },
    get(){
       return ls.getItem("token");
    },
    clear(){
        ls.clear("token");
    }
}