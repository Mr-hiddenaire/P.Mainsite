jQuery(document).ready(function(){jQuery(document).on("change","#_armember_plan_select",function(){jQuery("._armember_plan_select_field").append(jQuery(".arm_woo_addon_loader_img")),jQuery("._armember_plan_select_field .arm_woo_addon_loader_img").show(),jQuery.ajax({type:"GET",url:__ARMAJAXURL,data:"action=woocommerce_get_plan_cycle&plan_id="+jQuery(this).val(),dataType:"html",success:function(e){"null"!=e?(jQuery("._armember_plan_select_field").next("p").hide(),jQuery(".arm_woocommerce_selected_plan_cycle").html(e).show()):(jQuery("._armember_plan_select_field").next("p").show(),jQuery(".arm_woocommerce_selected_plan_cycle").html("").hide()),jQuery("._armember_plan_select_field .arm_woo_addon_loader_img").hide()}})}),"block"==jQuery(".arm_woocommerce_selected_plan_cycle").css("display")&&jQuery("._armember_plan_select_field").next("p").hide(),jQuery(document).on("change","#_armember_post_select",function(){jQuery("._armember_post_select_field .arm_post_woo_addon_loader_img").show(),jQuery.ajax({type:"GET",url:__ARMAJAXURL,data:"action=woocommerce_get_plan_cycle&plan_id="+jQuery(this).val(),dataType:"html",success:function(e){"null"!=e?(jQuery("._armember_post_select_field").next("p").hide(),jQuery(".arm_woocommerce_selected_post_cycle").html(e).show()):(jQuery("._armember_post_select_field").next("p").show(),jQuery(".arm_woocommerce_selected_post_cycle").html("").hide()),jQuery("._armember_post_select_field .arm_post_woo_addon_loader_img").hide()}})}),"block"==jQuery(".arm_woocommerce_selected_post_cycle").css("display")&&jQuery("._armember_post_select_field").next("p").hide()});