console.log("mixpanel_init");
<!-- start Mixpanel -->
    (function(f,b){
        if(!b.__SV){
            var a,e,i,g;
            window.mixpanel=b;
            b._i=[];
            b.init=function(a,e,d){
                function f(b,h){
                    var a=h.split(".");
                    2==a.length&&(b=b[a[0]],h=a[1]);
                    b[h]=function(){
                        b.push([h].concat(Array.prototype.slice.call(arguments,0)))
                    }
                }
                var c=b;
                "undefined"!==typeof d?c=b[d]=[]:d="mixpanel";
                c.people=c.people||[];
                c.toString=function(b){
                    var a="mixpanel";
                    "mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");
                    return a;
                };
                c.people.toString=function(){
                    return c.toString(1)+".people (stub)"
                };
                i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
                for(g=0;g<i.length;g++)f(c,i[g]);
                b._i.push([a,e,d])};
                b.__SV=1.2;
                a=f.createElement("script");
                a.type="text/javascript";
                a.async=!0;
                a.src="js/mixpanel-2.2.js";
                e=f.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(a,e);
        }
    })(document,window.mixpanel||[]);
mixpanel.init("ab007984c90edee955e8005d67714670");