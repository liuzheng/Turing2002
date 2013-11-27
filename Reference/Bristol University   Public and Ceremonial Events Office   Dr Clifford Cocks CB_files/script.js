function sitestat(ns_l){ns_l+='&amp;ns__t='+(new Date()).getTime();ns_pixelUrl=ns_l;
ns_0=document.referrer;
ns_0=(ns_0.lastIndexOf('/')==ns_0.length-1)?ns_0.substring(ns_0.lastIndexOf('/'),0):ns_0;
if(ns_0.length>0)ns_l+='&amp;ns_referrer='+escape(ns_0);
if(document.images){ns_1=new Image();ns_1.src=ns_l;}else
document.write('<img src="'+ns_l+'" width="1" height="1" alt="">');}

var sitestat_b, sitestat_c;
if (document.getElementsByTagName) sitestat_b=document.getElementsByTagName("base");
else if (document.all && document.all.tags) sitestat_b=document.all.tags("BASE");
if (sitestat_b && sitestat_b.length > 0) sitestat_c=sitestat_b[0].getAttribute("href");
if (sitestat_c && sitestat_c.charAt(sitestat_c.length-1)=="/") {
  sitestat_c+="index_html";
  sitestat_c=sitestat_c.replace(/^https?:\/\//, "");
}
else sitestat_c=window.location.host+window.location.pathname;
if (window.location.search && window.location.protocol=="http:") sitestat_c+=window.location.search.replace(/^\?/, "/");

sitestat_c=window.unescape(sitestat_c);
sitestat_c=sitestat_c.replace(/^www\./i, "");
sitestat_c=sitestat_c.replace(/\.?bris(tol)?\.ac\.uk/i, "");
sitestat_c=sitestat_c.replace(/[^A-Za-z0-9-\/_]/g, "_");
sitestat_c=sitestat_c.replace(/\//g, ".");

sitestat(window.location.protocol + "//uk.sitestat.com/bristol/bristol-ext/s?" + sitestat_c);
