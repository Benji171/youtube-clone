(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{49:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),l=a(28),o=a.n(l),s=a(40),u=a(14),m=a(10),d=a(24),p=a(25),h=a(107),v=a(102),b=a(108),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a),t.preventDefault()},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(r.a.Component),E=a(106),g=function(e){var t=e.video;if(!t)return r.a.createElement("div",null);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{elevation:6,style:{height:"50%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(v.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(E.a,{variant:"h4"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(E.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(E.a,{variant:"subtitle2"},t.snippet.description)))},y=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(v.a,{style:{display:"flex",alignItems:"center",marginRight:"10px",marginBottom:"5px",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px",height:"100px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(E.a,{variant:"subtitle1"},r.a.createElement("b",null,t.snippet.title))))},S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(y,{onVideoSelect:a,key:t,video:e})}));return r.a.createElement(h.a,{container:!0,spaceing:10},n)},x=a(45),w=a.n(x).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyBAeNLRaYVAStwo0GWGV6Fzd_SSnCQD_Dc",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(h.a,{justify:"center",spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,spacing:10},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f,{onFormSubmit:this.handleSubmit})),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(g,{video:t})),r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(S,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e3890af3.chunk.js.map