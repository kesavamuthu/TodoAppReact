(this["webpackJsonpfunny-react"]=this["webpackJsonpfunny-react"]||[]).push([[0],{40:function(e,t,a){e.exports=a(52)},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),l=a.n(r),i=(a(45),a(46),a(55)),c=a(56),o=a(34),u=a(62),p=a(16),h=a.n(p),m=a(30),v=a(6),d=a(39),f=a(18),b=a(19),g=a(9),k=a(24),E=a(26),y=a(59),O=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).inputRef=s.a.createRef(),n.tmp=n.props.value,n}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a.Control,{size:"lg",type:"text",placeholder:"What needs to be done ?",ref:this.inputRef,value:this.tmp,onKeyDown:function(t){console.log(e.props,e.inputRef.current.value.trim()),e.inputRef.current.value&&13===t.keyCode&&void 0===e.props.index?(e.props.onSave(e.inputRef.current.value.trim()),e.inputRef.current.value=""):13===t.keyCode&&e.props.index&&(e.props.replace(e.inputRef.current.value.trim(),e.props.index),e.inputRef.current.value="")},style:{display:"inline",width:"94%"}}))}}]),a}(s.a.Component),S=a(60),j=a(54),x=a(25);var w=function(e){var t=e.task.map((function(t,a){if(t.task&&!t.isDeleted)return s.a.createElement(S.a.Item,{action:!0,key:t.date,id:a,className:t.status?"strike":void 0},s.a.createElement(j.a.Prepend,null,s.a.createElement(i.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{xs:1.5},s.a.createElement(j.a.Radio,{"aria-label":"Radio button for following text input",name:"what",onClick:function(){return e.onUpdate(a)}})),s.a.createElement(o.a,{onClick:function(){return e.onChangeStatus(a)}},t.task),s.a.createElement(o.a,{xs:1},s.a.createElement(x.a,{onClick:function(){return e.onDelete(a)}}))))))}));return s.a.createElement(S.a,null,t)},C=a(57),I=a(58);var R=function(e){var t=e.arr.map((function(t,a){return s.a.createElement(C.a,{key:a,id:a,variant:"light",value:t,onClick:e.onChangeTab,style:{margin:"0px 10px"}},t)}));return s.a.createElement(u.a,{variant:"light",style:{textAlign:"center"}},s.a.createElement(I.a,{className:"bottomPositionForSpan"},e.count+(2===e.selectedTab?" items completed":" items left")),t)},T=a(61),D=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this)).changeTab=function(e){var t,a=Number(e.target.id),s=n.state.prev.map((function(e){return Object(d.a)({},e)}));if(n.selectedTab=0,s)switch(a){case 1:t=s.filter((function(e){return!e.status})),n.setState({lists:t,prev:n.state.prev});break;case 2:if(!(t=s.filter((function(e){return e.status}))))return;t=t.map((function(e){return e.status=!1,e})),n.setState({lists:Object(v.a)(t),prev:n.state.prev}),n.selectedTab=2;break;default:n.setState({lists:n.state.prev,prev:n.state.prev})}},n.state={lists:[],prev:[],isDeleted:""},n.save=n.save.bind(Object(g.a)(n)),n.changeStatus=n.changeStatus.bind(Object(g.a)(n)),n.delete=n.delete.bind(Object(g.a)(n)),n.update=n.update.bind(Object(g.a)(n)),n.replace=n.replace.bind(Object(g.a)(n)),n.counter=n.counter.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"save",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=this.state.prev).push({task:t,status:"",date:(new Date).getTime()}),e.next=4,this.setState({lists:Object(v.a)(a),prev:Object(v.a)(a)});case 4:localStorage.setItem("all tasks",JSON.stringify(this.state));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"changeStatus",value:function(e){var t=this.state.lists;t[e].status=!t[e].status,this.setState({lists:Object(v.a)(t),prev:t}),localStorage.setItem("all tasks",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){localStorage.getItem("all tasks")&&this.setState(JSON.parse(localStorage.getItem("all tasks")))}},{key:"delete",value:function(e){var t=this.state.prev;t[e].isDeleted=!0,this.setState({lists:Object(v.a)(t),prev:Object(v.a)(t)}),localStorage.setItem("all tasks",JSON.stringify(this.state))}},{key:"update",value:function(e){var t=this.state.prev;this.updateValue=t[e].task,this.updateIndex=e,this.setState({lists:Object(v.a)(this.state.lists),prev:Object(v.a)(this.state.lists)})}},{key:"replace",value:function(){var e=Object(m.a)(h.a.mark((function e(t,a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in replace method"),(n=this.state.prev)[a].task=t,this.updateValue=void 0,this.updateIndex=void 0,e.next=7,this.setState({lists:Object(v.a)(n),prev:Object(v.a)(n)});case 7:localStorage.setItem("all tasks",JSON.stringify(this.state));case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"counter",value:function(){var e=this;this.count=0,this.state.lists.forEach((function(t){t.status||t.isDeleted||e.count++}))}},{key:"render",value:function(){return this.counter(),console.log(this.updateValue),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"shadow-lg"},s.a.createElement(T.a,{defaultActiveKey:"0"},s.a.createElement(T.a.Toggle,{as:C.a,variant:"link",eventKey:"0",style:{display:"inline-block"}},s.a.createElement(x.b,null)),s.a.createElement(O,{onSave:this.save,value:this.updateValue,index:this.updateIndex,replace:this.replace}),s.a.createElement(T.a.Collapse,{eventKey:"0"},s.a.createElement(w,{task:this.state.lists,onChangeStatus:this.changeStatus,onDelete:this.delete,onUpdate:this.update})),s.a.createElement(R,{arr:["All","Active","Completed"],onChangeTab:this.changeTab,refs:this.refs,count:this.count,selectedTab:this.selectedTab}))))}}]),a}(s.a.Component);var N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{sm:2}),s.a.createElement(o.a,{sm:8},s.a.createElement("h1",{style:{textAlign:"center",font:"oblique normal 1.6em"}},"todos"),s.a.createElement(D,null)),s.a.createElement(o.a,{sm:2}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.0d906f11.chunk.js.map