sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ResourceManagement.controller.View1", {
		
			onInit:function(){

               this.getView().setModel(this.getOwnerComponent().getModel("jdata"));
               
  },
   showDetails :  function(oEvent){
  var oModelContext = oEvent.getParameter("listItem").getBindingContext().getObject();
 
  var oArray = [];
  oArray.push(oModelContext);
  var dialogModel = new sap.ui.model.json.JSONModel();
  this.getView().setModel(dialogModel,"DialogModel");
  this.getView().getModel("DialogModel").setProperty("/ProductSelected", oArray);
		}

	});
});