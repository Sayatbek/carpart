<#include "../include/imports.ftl">
<#if menu??>
  <div class="hst-container">
    <div class="hst-container-item">
      <#if menu.siteMenuItems??>
        <#list menu.siteMenuItems as item>
          <#if item.selected || item.expanded>
            <div class="list-group left-nav">
              <#--<a href="<@hst.link link=item.hstLink/>" class="list-group-item level1">${item.name?html}</a>-->
                <#--<#list item.childMenuItems as item>-->
                  <#--<a href="<@hst.link link=item.hstLink/>" class="list-group-item level2"><i class="fa fa-angle-right"> </i>${item.name?html}</a>-->
                <#--</#list>-->
                <div class="col-md-7 col-sm-7">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10049.716297522138!2d76.90044477157436!3d43.31966702624771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836b69bdae1a49%3A0x6d94382ffd242d2d!2z0KDRi9C90L7QuiDQkNCy0YLQvtC30LDQv9GH0LDRgdGC0LXQuSDQmtC10L3QttC10YXQsNC9IDI!5e0!3m2!1sru!2skz!4v1519816248043" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
                </div>
            </div>
          </#if>
        </#list>
      </#if>
    </div>
  </div>
</#if>