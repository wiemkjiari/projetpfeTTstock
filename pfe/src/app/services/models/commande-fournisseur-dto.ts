/* tslint:disable */
/* eslint-disable */
import { FournisseurDto } from '../models/fournisseur-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
export interface CommandeFournisseurDto {
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  fournisseur?: FournisseurDto;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
}
