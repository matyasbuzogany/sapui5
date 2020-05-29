sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function(Controller, Fragment, MessageToast) {
    'use strict';
    return Controller.extend("org.ubb.books.controller.BookList", {


         //delete button pressed
        onDelete(oEvent) {
            const selectedRow = this.byId("idBooksTable").getSelectedContexts();
            const sPathToBook = selectedRow[0].getPath();

            this.getView().getModel().remove(sPathToBook, {
                success: () => {
                    MessageToast.show("Book Deleted Successfully!");
                },
                error: () => {
                    MessageToast.show("Error in deleting Book!");
                }
            });
        },



        
        //add button pressed to open fragment
        onAdd : function () {

            if (!this.addDialog) {
                this.newBookDialog = sap.ui.xmlfragment("org.ubb.books.view.AddDialog", this);
            }

            this.getView().addDependent(this.newBookDialog);
            this.newBookDialog.open();
        },

        //save button on fragment 
        saveBookInDatabase(oEvent) {

            var bCreate = true;

			var objectBook = {
				ISBN: "",
				Author: "",
				Title: "",
                DatePublished: "",
                AvailableBooks: "",
				Language: "",
				NumberOfBooks: ""
            };
            
            var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            
            //isbn
			if (oControl.getValue().length !== 0) {
				objectBook.ISBN = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //author
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //title
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Title = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //datepublished
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.DatePublished = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //available of books
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.AvailableBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }

            //language
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //number of books
			oControl = aItems[6].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.NumberOfBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            this.getView().getModel().setUseBatch(false);
            
            this.getView().getModel().create("/Books", objectBook,{ 
                success: () =>  {
                    MessageToast.show("Book Added Successfully!");
                },
                error: () => {
                    MessageToast.show("Error in adding book!");
                }
            });
        }, 



        //update button pressed to open fragment
        onUpdate : function () {

            // const authorInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("Author");
            // const titleInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("Title");
            // const dateInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("DatePublished");
            // const availableInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("AvailableBooks");
            // const languageInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("Language");
            // const numberInTable = this.byId("idBooksTable").getSelectedContexts()[0].getProperty("NumberOfBooks");

            // console.log(authorInTable, titleInTable, dateInTable, availableInTable, languageInTable, numberInTable);


            if (!this.updateDialog) {
                this.newBookDialog = sap.ui.xmlfragment("org.ubb.books.view.UpdateDialog", this);
            }

            this.getView().addDependent(this.newBookDialog);
            this.newBookDialog.open();

        },


        //update button on fragment
        updateBookInDatabase(oEvent) { 
            const selectedRow = this.byId("idBooksTable").getSelectedContexts();
            
            const sPathToBook = selectedRow[0].getPath();
            console.log(sPathToBook.substring(8,18));

            const isbnstring = sPathToBook.substring(8,18);
            

            var bCreate = true;

            var objectBook = {
				ISBN: sPathToBook.substring(8,18),
				Author: "",
				Title: "",
                DatePublished: "",
                AvailableBooks: "",
				Language: "",
				NumberOfBooks: ""
            };
            
            var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            

            //author
			oControl = aItems[0].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //title
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Title = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //datepublished
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.DatePublished = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //available of books
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.AvailableBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }

            //language
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //number of books
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.NumberOfBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            this.getView().getModel().setUseBatch(false);
            
            this.getView().getModel().update("/Books(ISBN='"+isbnstring+"')", objectBook,{ 
                success: () =>  {
                    MessageToast.show("Book Updated Successfully!");
                },
                error: () => {
                    MessageToast.show("Error in updating book!");
                }
            });
        }

    });
});