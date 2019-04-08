import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-entrega',
  templateUrl: 'entrega.html',
})
export class EntregaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider : HttpProvider) {
      this.PegarCidade();
    // this.addCidade();
  } 
  public listaCidades : any;
  public listBairros : any;
  public TextField : any; // : boolean = false;
/*
  public city = [];
  public neighborhood = []; 
*/

  url = 'http://104.196.102.231/'
/*
  public addCidade(){
    this.PegarCidade().subscribe(
      (retorno : any) =>{
        this.listaCidades = retorno;

      }
    )
  } */
  
  public PegarCidade(){
    this.httpProvider.url = this.url + 'cidades'; 
    
    this.httpProvider.get().subscribe(
      (retorno : any) =>{
        this.listaCidades = retorno;
      },
      (error : any) => {
        console.log(error)
      }
    )
  }

 public PegarBairro(){
  this.httpProvider.url = this.url + 'bairros' + this.listaCidades;

  this.httpProvider.get().subscribe(
    (retorno : any) =>{
      this.listBairros = retorno;
    },
    (error : any) => {
      console.log(error)
    }
  )
}// return this.httpProvider.get();

public ClickText(){
  this.TextField = this.TextField; 
 } 
 
 public reset(){ // PROBLEMAS AO LIMPAR OS CAMPOS DE TEXTO
   this.TextField = [];
 }
}
   /*
   this.city = null;
   this.listBairros = [];
   this.TextField = !this.TextField; 
   this.PegarCidade();
   // this.addCidade();
   
  }
}

 
 public listBairos(){
   this.PegarBairro().subscribe(
     (resultado : any) =>{
       this.listBairros = resultado;
      }
      )
 } 
*/