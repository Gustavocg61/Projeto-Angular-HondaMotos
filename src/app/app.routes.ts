import { Routes } from '@angular/router';
import { ProdutoCard } from './components/produto-card/produto-card';
import { ListaCard } from './components/lista-card/lista-card';
import { SobreNos } from './components/sobre-nos/sobre-nos';
import { Suporte } from './components/suporte/suporte';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';
import { Banner } from './components/banner/banner';
import { ReceberApiComponent } from './components/receber-api/receber-api';

export const routes: Routes = [
    {path: '', component: ListaCard},
    {path: "produto", component: ProdutoCard},
    {path: "lista", component: ListaCard},
    {path: "sobre-nos", component: SobreNos},
    {path: "suporte", component: Suporte},
    {path: "contato", component: Contato},
    {path: "banner", component: Banner},
    {path: "footer", component: Footer},
    {path: "receber-api", component: ReceberApiComponent}
];
