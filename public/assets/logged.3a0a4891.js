import{_ as r,o as d,c as u,a as e,w as p,v as i,i as h,b as _,F as c,p as v,k as g,h as l,l as f,m}from"./index.38f3188e.js";const n=t=>(v("data-v-20a7b7d1"),t=t(),g(),t),b=n(()=>e("h2",{id:"already-logged"},"Vous \xEAtes d\xE9j\xE0 connect\xE9(e) \u26A0\uFE0F",-1)),y=n(()=>e("hr",null,null,-1)),A=n(()=>e("h3",null,"D\xE9poser une photo de profil",-1)),S=n(()=>e("button",{type:"submit"},"Envoyer",-1)),k={data(){return{photo:null}},methods:{sendAvatar(){const t=l();t&&f(t.currentUser,{photoURL:this.photo}).then().catch(o=>{console.log(o)})},logout(){const t=l();m(t),this.$router.push("/")}}},w=Object.assign(k,{setup(t){return(o,s)=>(d(),u(c,null,[b,e("h3",null,[e("a",{onClick:s[0]||(s[0]=a=>o.logout())},"Se d\xE9connecter")]),y,e("form",{onSubmit:s[2]||(s[2]=_((...a)=>o.sendAvatar&&o.sendAvatar(...a),["prevent"]))},[A,p(e("input",{type:"url",id:"avatar","onUpdate:modelValue":s[1]||(s[1]=a=>h(photo)?photo.value=a:null),placeholder:"Avatar"},null,512),[[i,o.photo]]),S],32)],64))}});var B=r(w,[["__scopeId","data-v-20a7b7d1"]]);export{B as default};