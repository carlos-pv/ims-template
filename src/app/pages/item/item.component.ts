import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoItemInterface } from 'src/app/interfaces/producto-item.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // productoItem: ProductoItemInterface = {};
  productoItem: ProductoItemInterface | undefined;

  id: any;
  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.productosService.getProducto(parametros['id']).subscribe((producto: ProductoItemInterface)=>{
        this.id = parametros['id']
        this.productoItem=producto;
      })
    });
  }

}
