import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare const Swal: any;

interface Question {
  question: string;
  options: { key: string; text: string }[];
  correct: string;
}

@Component({
  selector: 'app-biologie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './biologie.html',
  styleUrls: ['./biologie.css']
})
export class Biologie {
  currentQuiz = 0;
  score = 0;   // ✅ correct
  wrong = 0;   // ✅ wrong
  selectedAnswer: string | null = null;
  finished = false;
  showAnswers = false;


  quizData: Question[] = [
    {
      question: "1 - L’observation vitale des cellules végétales vivantes permet de distinguer :",
      options: [
        { key: 'a', text: "le cytoplasme, les plastes, les mitochondries et les nucléoles" },
        { key: 'b', text: "la membrane, l’appareil vasculaire, le cytoplasme et le noyau" },
        { key: 'c', text: "les chondriosomes, la membrane squelettique, le noyau et les plastes" },
        { key: 'd', text: "le cytoplasme, les gouttelettes d’huiles, les parenchymes et les chondriochontes" }
      ],
      correct: 'b'
    },
    {
      question: "2 - En coloration vitale des cellules végétales, l’indice de la mort de la cellule est :",
      options: [
        { key: 'a', text: "le noyau et le cytoplasme qui se déplacent" },
        { key: 'b', text: "le cytoplasme qui se contracte et perd sa transparence" },
        { key: 'c', text: "le noyau et le cytoplasme sont colorés" },
        { key: 'd', text: "le noyau et le cytoplasme qui ne sont pas colorés" }
      ],
      correct: 'c'
    },
    {
      question: "3 - En histologie végétale, un bon fixateur est celui qui :",
      options: [
        { key: 'a', text: "colore tous les constituants de la cellule" },
        { key: 'b', text: "modifie les formes des tissus" },
        { key: 'c', text: "colore les tissus morts et les tissus vivants" },
        { key: 'd', text: "conserve les substances existant dans le tissu sans les modifier trop" }
      ],
      correct: 'd'
    },
    {
      question: "4 - Les 5 types de tissus végétaux sont :",
      options: [
        { key: 'a', text: "méristèmes, tissus de revêtement, parenchymes, tissus de soutien, tissus conducteurs" },
        { key: 'b', text: "parenchyme, sclérenchyme, collenchyme, tissu palissadique et chlorophylle" },
        { key: 'c', text: "méristèmes, tissu protecteur, parenchyme, l’épiderme et tissu mécanique" },
        { key: 'd', text: "tissu de revêtement, tissu de remplissage, tissu de soutien, collenchyme et tissu conducteur" }
      ],
      correct: 'a'
    },
    {
      question: "5 - Les méristèmes sont :",
      options: [
        { key: 'a', text: "constitués de cellules mortes à paroi épaisse qui protègent" },
        { key: 'b', text: "constitués de jeunes cellules embryonnaires permettant la croissance" },
        { key: 'c', text: "constitués de cellules adultes en voie de développement" },
        { key: 'd', text: "constitués de cellules indifférenciées dont la croissance n’est pas encore terminée" }
      ],
      correct: 'b'
    },
    {
      question: "6 - Les différentes sortes de méristèmes sont :",
      options: [
        { key: 'a', text: "les méristèmes apicaux et primaires" },
        { key: 'b', text: "les méristèmes latéraux et secondaires" },
        { key: 'c', text: "les méristèmes primaires et secondaires" },
        { key: 'd', text: "les méristèmes de croissance en longueur et en diamètre" }
      ],
      correct: 'c'
    },
    {
      question: "7 - Qu’est-ce que l’épiderme ?",
      options: [
        { key: 'a', text: "se trouve dans les jeunes tiges et feuilles" },
        { key: 'b', text: "est la couche externe de la tige qui constitue l’écorce" },
        { key: 'c', text: "est un tissu de soutien des végétaux" },
        { key: 'd', text: "est un tissu primaire, superficiel de protection avec une seule couche de cellules" }
      ],
      correct: 'd'
    },
    {
      question: "8 - Qu’est-ce qu’une cuticule ?",
      options: [
        { key: 'a', text: "couche imperméable au-dessus de l’épiderme constituée de cire et percée de stomates" },
        { key: 'b', text: "couche de cellules internes de l’épiderme constituée de cellules mortes" },
        { key: 'c', text: "tissu de protection des feuilles et tiges" },
        { key: 'd', text: "couche de cellule externe de la tige" }
      ],
      correct: 'a'
    },
    {
      question: "9 - Quelles parties de plante sont les stomates ?",
      options: [
        { key: 'a', text: "ce sont des orifices localisées au niveau des jeunes tiges où s’écoule la sève." },
        { key: 'b', text: "ce sont des ouvertures percées dans la couche de l’épiderme permettant les échanges d’air et d’eau avec l’extérieur." },
        { key: 'c', text: "ce sont des cellules de sécrétions de l’essence." },
        { key: 'd', text: "ce sont des sacs de stockage des essences." }
      ],
      correct: 'b'
    },
    {
      question: "10 - Qu’est-ce qu’un périderme ?",
      options: [
        { key: 'a', text: "couche de liège recouvrant la tige." },
        { key: 'b', text: "couche de cellules mortes assurant la protection de la tige." },
        { key: 'c', text: "nouvelle couche protectrice qui remplace l’épiderme qui meurt et disparaît." },
        { key: 'd', text: "tissu de revêtement de la plante ligneuse." }
      ],
      correct: 'c'
    },
    {
      question: "11 - Quel est le rôle et fonctionnement des deux méristèmes secondaires ?",
      options: [
        { key: 'a', text: "ils produisent le périderme." },
        { key: 'b', text: "ils assurent l’accroissement en longueur de la tige." },
        { key: 'c', text: "ils assurent l’accroissement en largeur de la tige." },
        { key: 'd', text: "ils produisent, vers l’extérieur, des cellules mortes formant le liège (suber) et vers l’intérieur, le phelloderme." }
      ],
      correct: 'd'
    },
    {
      question: "12 - Où se trouvent les méristèmes primaires ou apicaux ?",
      options: [
        { key: 'a', text: "au niveau des bourgeons et des racines." },
        { key: 'b', text: "à l’intérieur de la tige." },
        { key: 'c', text: "à l’intérieur des jeunes pousses." },
        { key: 'd', text: "dans l’écorce de tige." }
      ],
      correct: 'a'
    },
    {
      question: "13 - Où se trouvent les méristèmes secondaires ou latéraux ?",
      options: [
        { key: 'a', text: "au niveau des bourgeons et des racines." },
        { key: 'b', text: "à l’intérieur des racines et des pousses." },
        { key: 'c', text: "dans l’écorce de tige." },
        { key: 'd', text: "au bout des racines." }
      ],
      correct: 'c'
    },
    {
      question: "14 - Quels tissus jouent un rôle dans la croissance en longueur de la plante ?",
      options: [
        { key: 'a', text: "les parenchymes" },
        { key: 'b', text: "tissu de protection" },
        { key: 'c', text: "méristème primaire ou apicaux" },
        { key: 'd', text: "tissu de soutien" }
      ],
      correct: 'c'
    },
    {
      question: "15 - Quels tissus qui jouent le rôle dans la croissance du diamètre ou en épaisseur de la plante ?",
      options: [
        { key: 'a', text: "les parenchymes" },
        { key: 'b', text: "tissu de revêtement" },
        { key: 'c', text: "tissu de soutien" },
        { key: 'd', text: "méristème secondaire ou latéraux" }
      ],
      correct: 'd'
    },
    {
      question: "16 - Où se trouve le tissu de remplissage ou parenchyme ?",
      options: [
        { key: 'a', text: "au niveau de la tige, feuille et racine." },
        { key: 'b', text: "au niveau des fruits." },
        { key: 'c', text: "au niveau de la tige et des fleurs." },
        { key: 'd', text: "au niveau de l’écorce et du liège." }
      ],
      correct: 'a'
    },
    {
      question: "17 - Quelles sont les fonctions du parenchyme chlorophyllien ?",
      options: [
        { key: 'a', text: "stockage des huiles essentielles et photosynthèse." },
        { key: 'b', text: "stockage de l’amidon et photosynthèse." },
        { key: 'c', text: "absorption et photosynthèse." },
        { key: 'd', text: "stockage de l’amidon et absorption." }
      ],
      correct: 'b'
    },
    {
      question: "18 - Les chlorophylles se trouvent surtout dans :",
      options: [
        { key: 'a', text: "tissu de soutien des organes âgés." },
        { key: 'b', text: "tissu de revêtement de la tige." },
        { key: 'c', text: "le parenchyme palissadique et lacuneux des feuilles." },
        { key: 'd', text: "tissu de protection de la racine." }
      ],
      correct: 'c'
    },
    {
      question: "19 - Les parenchymes de réserve peuvent contenir :",
      options: [
        { key: 'a', text: "des protides et chlorophylle." },
        { key: 'b', text: "des lipides ou huiles essentielles." },
        { key: 'c', text: "de l’amidon et chlorophylle." },
        { key: 'd', text: "des sucres comme le saccharose ou glucide et l’amidon." }
      ],
      correct: 'd'
    },
    {
      question: "20 - Les tissus de soutien (collenchyme, sclérenchyme, tissus conducteurs) :",
      options: [
        { key: 'a', text: "assurent la rigidité de la plante." },
        { key: 'b', text: "assurent le rôle de nutrition." },
        { key: 'c', text: "assurent et facilitent la photosynthèse." },
        { key: 'd', text: "assurent l’accroissement de la plante." }
      ],
      correct: 'a'
    },
    {
      question: "21 - Les tissus conducteurs (xylème ou bois, phloème ou liber) :",
      options: [
        { key: 'a', text: "xylème transporte la sève élaborée." },
        { key: 'b', text: "xylème transporte la sève brute et phloème transporte la sève élaborée." },
        { key: 'c', text: "phloème transporte la sève brute." },
        { key: 'd', text: "xylème et phloème ne transportent pas les sèves." }
      ],
      correct: 'b'
    },
    {
      question: "22 - Les parenchymes aérifères accumulent :",
      options: [
        { key: 'a', text: "les lipides" },
        { key: 'b', text: "les sucres" },
        { key: 'c', text: "l’air et l’oxygène" },
        { key: 'd', text: "les substances de réserve" }
      ],
      correct: 'c'
    },
    {
      question: "23 - Les parenchymes aquifères accumulent :",
      options: [
        { key: 'a', text: "l’air et l’oxygène" },
        { key: 'b', text: "l’essence" },
        { key: 'c', text: "les sucres" },
        { key: 'd', text: "l’eau" }
      ],
      correct: 'd'
    },
    {
      question: "24 - Le tissu primaire constitué de cellules vivantes à paroi épaissie par la cellulose est :",
      options: [
        { key: 'a', text: "le collenchyme" },
        { key: 'b', text: "le parenchyme" },
        { key: 'c', text: "le sclérenchyme" },
        { key: 'd', text: "le phelloderme" }
      ],
      correct: 'a'
    },
    {
      question: "25 - Le tissu primaire constitué de cellules mortes dont les parois sont chargées de lignine est :",
      options: [
        { key: 'a', text: "le parenchyme" },
        { key: 'b', text: "le sclérenchyme" },
        { key: 'c', text: "le collenchyme" },
        { key: 'd', text: "le phelloderme" }
      ],
      correct: 'b'
    },
    {
      question: "26 - La structure d’une section transversale de la tige, de l’extérieur vers l’intérieur, comprend des couches :",
      options: [
        { key: 'a', text: "liber, cambium, phelloderme, aubier et duramen" },
        { key: 'b', text: "liber, phelloderme, aubier, duramen et cambium" },
        { key: 'c', text: "phelloderme, liber, cambium, aubier et duramen" },
        { key: 'd', text: "duramen, aubier, cambium, liber et phelloderme" }
      ],
      correct: 'c'
    },
    {
      question: "27 - Le cambium ou assise subéro-phellodermique (méristème secondaire) placé entre suber et phelloderme :",
      options: [
        { key: 'a', text: "concerne la partie interne de la tige" },
        { key: 'b', text: "concerne la partie centrale de la tige" },
        { key: 'c', text: "concerne la parie moyenne de la tige" },
        { key: 'd', text: "concerne la partie externe de la tige" }
      ],
      correct: 'd'
    },
    {
      question: "28 - Le cambium ou assise libéro-ligneuse (méristème secondaire) placé entre phloème et xylème :",
      options: [
        { key: 'a', text: "concerne la partie interne de la tige" },
        { key: 'b', text: "concerne la partie externe de la tige" },
        { key: 'c', text: "concerne la partie centrale de la tige" },
        { key: 'd', text: "concerne la parie moyenne de la tige" }
      ],
      correct: 'a'
    },
    {
      question: "29 - Les tissus de soutien sont :",
      options: [
        { key: 'a', text: "le parenchyme et le collenchyme" },
        { key: 'b', text: "le collenchyme et le sclérenchyme" },
        { key: 'c', text: "le suber et phelloderme" },
        { key: 'd', text: "le sclérenchyme et le parenchyme" }
      ],
      correct: 'b'
    },
    {
      question: "30 - Le bois vivant est appelé aubier, quand il devient le duramen :",
      options: [
        { key: 'a', text: "il se trouve à la partie externe de la tige" },
        { key: 'b', text: "il se trouve à la partie externe de la racine" },
        { key: 'c', text: "les cellules sont mortes" },
        { key: 'd', text: "ses cellules constituent le parenchyme" }
      ],
      correct: 'c'
    },
    {
      question: "31 - Les différentes parties de la racine comportent des zones, citées du haut en bas, sont :",
      options: [
        { key: 'a', text: "zone de croissance, zone pilifère, le coiffe et zone subérisée" },
        { key: 'b', text: "zone pilifère, le coiffe, zone de croissance et zone subérisée" },
        { key: 'c', text: "le coiffe, zone pilifère, zone de croissance et zone subérisée" },
        { key: 'd', text: "zone subérisée, zone pilifère, zone de croissance et le coiffe" }
      ],
      correct: 'd'
    },
    {
      question: "32 - La partie de la racine qui remplie la fonction d’absorption est :",
      options: [
        { key: 'a', text: "la région pilifère" },
        { key: 'b', text: "la zone de croissance" },
        { key: 'c', text: "la zone subérisée" },
        { key: 'd', text: "la région lisse" }
      ],
      correct: 'a'
    },
    {
      question: "33 - La partie de la racine qui protège la racine pour l’élongation ou croissance en longueur est :",
      options: [
        { key: 'a', text: "zone lisse ou zone de croissance" },
        { key: 'b', text: "le coiffe" },
        { key: 'c', text: "zone pilifère ou zone de poils absorbants" },
        { key: 'd', text: "le collet" }
      ],
      correct: 'b'
    },
    {
      question: "34 - Dans la coupe de la racine, le péricycle est une couche de cellules situées :",
      options: [
        { key: 'a', text: "à l’intérieur de la moelle" },
        { key: 'b', text: "dans la couche de l’épiderme" },
        { key: 'c', text: "à l’intérieur du mésoderme" },
        { key: 'd', text: "à la partie centrale de la racine" }
      ],
      correct: 'c'
    },
    {
      question: "35 - Le rôle de l’endoderme de la racine est :",
      options: [
        { key: 'a', text: "de l’absorption des substances minérales" },
        { key: 'b', text: "de transporter la sève élaborée" },
        { key: 'c', text: "de stockage des substances de réserve" },
        { key: 'd', text: "de régler le passage des substances provenant du sol vers les tissus conducteurs de la stèle" }
      ],
      correct: 'd'
    },
    {
      question: "36 - Une couche de cellules, à partir de laquelle vont se former les ramifications de la racine, est :",
      options: [
        { key: 'a', text: "le péricycle" },
        { key: 'b', text: "l’épiderme" },
        { key: 'c', text: "l’endoderme" },
        { key: 'd', text: "le cylindre central" }
      ],
      correct: 'a'
    },
    {
      question: "37 - Le centre de la racine, la moelle, composée de parenchyme médullaire :",
      options: [
        { key: 'a', text: "a une fonction de transport" },
        { key: 'b', text: "n'a pas de fonction particulière ou a une fonction de réserve" },
        { key: 'c', text: "a une fonction de croissance en largeur" },
        { key: 'd', text: "a une fonction de croissance en longueur" }
      ],
      correct: 'b'
    },
    {
      question: "38 - Le cambium vasculaire (ou assise libéro-ligneuse) va créer les tissus de conduction secondaires qui sont :",
      options: [
        { key: 'a', text: "le xylème I et le phloème I" },
        { key: 'b', text: "le bois I et le liber I" },
        { key: 'c', text: "le xylème II et le phloème II" },
        { key: 'd', text: "le collenchyme et le parenchyme" }
      ],
      correct: 'c'
    },
    {
      question: "39 - Le phellogène, situé vers la périphérie de la racine (ou assise subéro-phellodermique), crée :",
      options: [
        { key: 'a', text: "le xylème I et le phloème I" },
        { key: 'b', text: "le bois I et le liber I" },
        { key: 'c', text: "le xylème II et le phloème II" },
        { key: 'd', text: "une couche de suber (ou liège) et une couche de phelloderme" }
      ],
      correct: 'd'
    },
    {
      question: "40 - Le type de racine qui est composé de plusieurs petites racines est :",
      options: [
        { key: 'a', text: "la racine fasciculée" },
        { key: 'b', text: "la racine tuberculeuse" },
        { key: 'c', text: "la racine pivotante" },
        { key: 'd', text: "la racine adventive" }
      ],
      correct: 'a'
    },
    {
      question: "41 - La racine est un organe vital de la plante. Son rôle est :",
      options: [
        { key: 'a', text: "l’accroissement des parties de plante" },
        { key: 'b', text: "l’absorption de l'eau et des nutriments du sol et l'accumulation de réserves" },
        { key: 'c', text: "la respiration et le transport de sève" },
        { key: 'd', text: "la photosynthèse ou l’assimilation chlorophyllienne" }
      ],
      correct: 'b'
    },
    {
      question: "42 - La coupe transversale de la tige montre différentes parties citées de l’extérieur vers l’intérieur :",
      options: [
        { key: 'a', text: "l’épiderme, le cylindre central, le parenchyme médullaire, le parenchyme cortical et les vaisceaux conducteurs" },
        { key: 'b', text: "les vaisceaux conducteurs, le cylindre central, le parenchyme médullaire, l’épiderme et parenchyme cortical" },
        { key: 'c', text: "l’épiderme, le parenchyme cortical, le cylindre central, le parenchyme médullaire et les vaisceaux conducteurs" },
        { key: 'd', text: "le parenchyme cortical, l’épiderme, le cylindre central, les vaisceaux conducteurs et le parenchyme médullaire" }
      ],
      correct: 'c'
    },
    {
      question: "43 - Les faisceaux conducteurs :",
      options: [
        { key: 'a', text: "se trouvent dans le cylindre central" },
        { key: 'b', text: "le xylème transporte la sève élaboré" },
        { key: 'c', text: "le phloème transporte la sève brute" },
        { key: 'd', text: "se trouvent dans le parenchyme médullaire" }
      ],
      correct: 'd'
    },
    {
      question: "44 - Les faisceaux conducteurs dans les tiges :",
      options: [
        { key: 'a', text: "le nombre de vaisseaux conducteurs sont nombreux chez les Monocotylédones" },
        { key: 'b', text: "chez les Monocotylédones, les vaisseaux sont disposés en cercle" },
        { key: 'c', text: "chez les Dicotylédones, les vaisseaux sont superposés" },
        { key: 'd', text: "le xylème transporte la sève élaborée vers les feuilles, fleurs et fruits" }
      ],
      correct: 'a'
    },
    {
      question: "45 - Chez la plupart des Monocotylédones, la rigidité de la tige :",
      options: [
        { key: 'a', text: "se fait grâce à l’épaississement des vaisseaux conducteurs" },
        { key: 'b', text: "est d’augmenter leurs assises et d’accumuler les tissus morts autour de leur tige" },
        { key: 'c', text: "se fait grâce aux nombreux vaisseaux de xylème et de phloème" },
        { key: 'd', text: "se fait grâce à l’augmentation de l’accroissement en épaisseur" }
      ],
      correct: 'b'
    },
    {
      question: "46 - Structure de la tige ou de la racine :",
      options: [
        { key: 'a', text: "le méristème secondaire se trouve à l’extrémité de la tige ou de la racine" },
        { key: 'b', text: "le méristème primaire et secondaire apparaissent en même temps" },
        { key: 'c', text: "la structure primaire provient du fonctionnement des méristèmes apicaux dits primaires" },
        { key: 'd', text: "le méristème primaire produit du xylème II et liber II" }
      ],
      correct: 'c'
    },
    {
      question: "47 - Les vaisseaux conducteurs dans la tige de :",
      options: [
        { key: 'a', text: "Monocotylédones, sont disposés en un seul cercle" },
        { key: 'b', text: "Dicotylédones, les vaisseaux cribrovasculaires secondaires sont disposés en amas" },
        { key: 'c', text: "Monocotylédones, les vaisseaux libéroligneux sont disposés en un seul cercle" },
        { key: 'd', text: "Dicotylédones, sont disposés en un seul cercle" }
      ],
      correct: 'd'
    },
    {
      question: "48 - Les structures primaires et secondaires de la tige et de racine :",
      options: [
        { key: 'a', text: "Les structures secondaires permettent la croissance en largeur et se traduisent par la formation du bois et du liège" },
        { key: 'b', text: "les structures primaires permettent la formation de xylème II et de phloème II" },
        { key: 'c', text: "les structures primaires permettent la croissance en largeur" },
        { key: 'd', text: "les structures secondaires permettent la croissance en longueur" }
      ],
      correct: 'a'
    },
    {
      question: "49 - La structure de Monocotylédones :",
      options: [
        { key: 'a', text: "le développement des Monocotylédones se fait grâce aux méristèmes secondaires" },
        { key: 'b', text: "la tige de Monocotylédones ne possèdent pas de méristèmes secondaires" },
        { key: 'c', text: "Les vaisseaux conducteurs dans la tige de Monocotylédones sont disposés en un seul cercle" },
        { key: 'd', text: "le cylindre central ou moelle de la tige de Monocotylédones est rempli de duramen" }
      ],
      correct: 'b'
    },
    {
      question: "50 - La tige de Monocotylédones et de Dicotylédones :",
      options: [
        { key: 'a', text: "la tige de Dicotylédones ne contient pas de duramen au centre" },
        { key: 'b', text: "la tige de Monocotylédones présente le cambium ou assise libéro-ligneuse" },
        { key: 'c', text: "la tige de Monocotylédones est rendue rigide par les couches de sclérenchyme" },
        { key: 'd', text: "la tige de Dicotylédones n’est pas ramifiée et pas de rameaux latéraux" }
      ],
      correct: 'c'
    },
    {
      question: "51 - L’écorce de la tige de Monocotylédones et de Dicotylédones :",
      options: [
        { key: 'a', text: "La partie écorce des Dicotylédones est rendue rigide par la couche de sclérenchyme" },
        { key: 'b', text: "La partie écorce des Monocotylédones contient une couche d’assise subéro-phellodermique" },
        { key: 'c', text: "L’écorce de Monocotylédones est recouvert de couche de liège à l’extérieur" },
        { key: 'd', text: "L’écorce de Dicotylédones est recouvert de couche de liège à l’extérieur" }
      ],
      correct: 'd'
    },
    {
      question: "52 - Le xylème assure essentiellement la circulation jusqu'aux feuilles :",
      options: [
        { key: 'a', text: "de la sève brute constituée d’eau et de sels minéraux puisés dans le sol par les racines" },
        { key: 'b', text: "de la sève élaborée, produit provenant de la photosynthèse" },
        { key: 'c', text: "des acides organiques et minéraux" },
        { key: 'd', text: "toutes les substances nécessaires pour la formation des fleurs et fruits" }
      ],
      correct: 'a'
    },
    {
      question: "53 - Le phloème assure essentiellement la circulation :",
      options: [
        { key: 'a', text: "de la sève brute des racines jusqu’aux feuilles et les autres parties de la plantes" },
        { key: 'b', text: "de la sève élaborée, sève enrichie des substances issues de la photosynthèse" },
        { key: 'c', text: "de l’eau et sels minéraux de racines jusqu’aux feuilles" },
        { key: 'd', text: "de la sève élaborée constituée d’eau et sels minéraux" }
      ],
      correct: 'b'
    },
    {
      question: "54 - Le péricycle est :",
      options: [
        { key: 'a', text: "une couche de cellules près de l’épiderme" },
        { key: 'b', text: "une couche de cellules près du centre du cylindre central" },
        { key: 'c', text: "une couche de cellules à partir de laquelle vont se former les ramifications de la racine" },
        { key: 'd', text: "une couche de cellules formant les vaisseaux conducteurs" }
      ],
      correct: 'c'
    },
    {
      question: "55 - Le procambium est :",
      options: [
        { key: 'a', text: "un tissu conducteur de la sève" },
        { key: 'b', text: "une couche de cellules à partir de laquelle vont se former les ramifications de la racine" },
        { key: 'c', text: "une couche de cellules près de l’épiderme" },
        { key: 'd', text: "une couche intermédiaire de cellules qui donnent la formation de xylème et de phloème" }
      ],
      correct: 'd'
    },
    {
      question: "56 - L’activité du cambium se traduit par :",
      options: [
        { key: 'a', text: "la formation de xylème primaire et de phloème primaire" },
        { key: 'b', text: "la croissance de la tige en largeur" },
        { key: 'c', text: "la croissance de la tige en longueur" },
        { key: 'd', text: "la formation de la couche protectrice à l’extérieur de la tige" }
      ],
      correct: 'a'
    },
    {
      question: "57 - Le cambium est :",
      options: [
        { key: 'a', text: "une couche de cellules mortes qui constituent l’épiderme" },
        { key: 'b', text: "une couche de cellules non différenciées ou embryonnaires qui sépare le bois I et le liber I" },
        { key: 'c', text: "une couche de cellules jeunes qui donnent la croissance de la tige" },
        { key: 'd', text: "une couche de cellules qui forment le cylindre central" }
      ],
      correct: 'b'
    },
    {
      question: "58 - L’assise subéro-phellodermique permet la formation de :",
      options: [
        { key: 'a', text: "xylème ou bois vers l’intérieur de la tige" },
        { key: 'b', text: "phloème ou liber vers l’extérieur de la tige" },
        { key: 'c', text: "liège ou suber à l’extérieur de la tige au niveau de l’écorce" },
        { key: 'd', text: "la couche de l’écorce" }
      ],
      correct: 'c'
    },
    {
      question: "59 - L’assise libéro-ligneuse permet la formation de :",
      options: [
        { key: 'a', text: "xylème ou bois vers l’intérieur de la tige" },
        { key: 'b', text: "phloème ou liber vers l’extérieur de la tige" },
        { key: 'c', text: "liège ou suber à l’extérieur de la tige au niveau de l’écorce" },
        { key: 'd', text: "xylème ou bois vers l’intérieur et le phloème ou liber vers l’extérieur" }
      ],
      correct: 'd'
    },
    {
      question: "60 - Les fonctions de la tige sont :",
      options: [
        { key: 'a', text: "le soutien de la plante, le transport des éléments nutritifs et le support mécanique des parties de plante" },
        { key: 'b', text: "le maintien du port de la plante et transport de sève brute et de sève élaborée" },
        { key: 'c', text: "l’absorption des substances nutritifs et transport des substances provenant de la photosynthèse" },
        { key: 'd', text: "le soutien de la plante et support mécanique de feuilles, de fleurs et de fruits" }
      ],
      correct: 'a'
    },
    {
      question: "61 - Les fonctions de la feuille sont :",
      options: [
        { key: 'a', text: "la photosynthèse, l’absorption, la respiration et stockage des éléments provenant de la photosynthèse" },
        { key: 'b', text: "la photosynthèse, la respiration, la transpiration et stockage des éléments nutritifs et de l’eau" },
        { key: 'c', text: "la respiration, l’absorption, la transpiration et la photosynthèse" },
        { key: 'd', text: "la respiration, l’absorption, l’assimilation chlorophyllienne et la transpiration" }
      ],
      correct: 'b'
    },
    {
      question: "62 - La feuille est composée de :",
      options: [
        { key: 'a', text: "cellulose, sucre, pectine" },
        { key: 'b', text: "lignine, cellulose, lipide" },
        { key: 'c', text: "pectine, cellulose, lignine" },
        { key: 'd', text: "pectine, cellulose, protide" }
      ],
      correct: 'c'
    },
    {
      question: "63 - La feuille peut contenir :",
      options: [
        { key: 'a', text: "calcium, magnésium, sodium, zinc, fer, cuivre" },
        { key: 'b', text: "sodium, potassium, magnésium, iode, soufre, fer" },
        { key: 'c', text: "phosphore, manganèse, soufre, potassium, sodium" },
        { key: 'd', text: "calcium, potassium, sodium, magnésium, soufre, phosphore" }
      ],
      correct: 'd'
    },
    {
      question: "64 - Il existe trois grands types de nervation : parallélinerve, palmatinerve et penninerve :",
      options: [
        { key: 'a', text: "la feuille de vigne est palmatinerve" },
        { key: 'b', text: "la feuille de riz est penninerve" },
        { key: 'c', text: "la feuille de manguier est parallélinerve" },
        { key: 'd', text: "la feuille de bambou est palmatinerve" }
      ],
      correct: 'a'
    },
    {
      question: "65 - La couche de cuticule de la feuille :",
      options: [
        { key: 'a', text: "joue le rôle dans l’absorption" },
        { key: 'b', text: "joue le rôle de diminuer la transpiration" },
        { key: 'c', text: "joue le rôle de protection contre la chaleur" },
        { key: 'd', text: "joue le rôle dans la photosynthèse" }
      ],
      correct: 'b'
    },
    {
      question: "66 - Les stomates des feuilles jouent le rôle :",
      options: [
        { key: 'a', text: "de protéger les feuilles contre la sècheresse" },
        { key: 'b', text: "d’absorption des substances minérales" },
        { key: 'c', text: "d’assurer les échanges gazeux avec l’extérieur" },
        { key: 'd', text: "de conduction de sèves" }
      ],
      correct: 'c'
    },
    {
      question: "67 - La cellule végétale qui contient une plus grande quantité d’eau est :",
      options: [
        { key: 'a', text: "la cellule du sclérenchyme" },
        { key: 'b', text: "la cellule du collenchyme" },
        { key: 'c', text: "la cellule du parenchyme" },
        { key: 'd', text: "la cellule méristématique" }
      ],
      correct: 'd'
    },
    {
      question: "68 - Les caractères essentiels des végétaux par comparaison avec ceux des animaux :",
      options: [
        { key: 'a', text: "La cellule végétale possède une membrane squelettique" },
        { key: 'b', text: "La cellule animale possède une membrane squelettique" },
        { key: 'c', text: "La cellule animale possède des chloroplastes" },
        { key: 'd', text: "La cellule végétale possède des grandes vacuoles" }
      ],
      correct: 'a'
    },
    {
      question: "69 - Les caractères essentiels des végétaux par comparaison avec ceux des animaux :",
      options: [
        { key: 'a', text: "La cellule végétale possède un système nerveux" },
        { key: 'b', text: "La cellule animale possède une circulation véritable" },
        { key: 'c', text: "La cellule végétale possède un milieu intérieur bien défini" },
        { key: 'd', text: "La cellule végétale possède un appareil musculaire" }
      ],
      correct: 'b'
    },
    {
      question: "70 - Les caractères essentiels des végétaux par comparaison avec ceux des animaux :",
      options: [
        { key: 'a', text: "La cellule végétale possède des organes des sens" },
        { key: 'b', text: "La cellule végétale ne possède pas de plastes" },
        { key: 'c', text: "La cellule végétale a le pouvoir de faire la photosynthèse" },
        { key: 'd', text: "La cellule végétale possède un vacuome très réduit" }
      ],
      correct: 'c'
    },
    {
      question: "71 - Les constituants de la cellule végétale :",
      options: [
        { key: 'a', text: "La cellule morte possède un cytoplasme en mouvement de cyclose." },
        { key: 'b', text: "Chez la cellule morte le cytoplasme est transparent." },
        { key: 'c', text: "La cyclose n’a pas de mouvement précis." },
        { key: 'd', text: "Examiné au microscope, la cellule végétale vivante, le cytoplasme est transparent incolore et homogène." }
      ],
      correct: 'd'
    },
    {
      question: "72 - Les constituants de la cellule végétale :",
      options: [
        { key: 'a', text: "La cyclose affecte le cytoplasme de toute cellule vivante." },
        { key: 'b', text: "La cyclose se fait de temps en temps chez la cellule vivante." },
        { key: 'c', text: "La cyclose n’est pas le mouvement du cytoplasme." },
        { key: 'd', text: "La cellule morte, la cyclose est accélérée par la chaleur." }
      ],
      correct: 'a'
    },
    {
      question: "73 - Les constituants de la cellule végétale :",
      options: [
        { key: 'a', text: "Les inclusions du cytoplasme ne se déplacent pas par le mouvement de cyclose." },
        { key: 'b', text: "La cyclose est accélérée par la lumière, l’augmentation de température et agents chimiques." },
        { key: 'c', text: "La cyclose n’est pas le mouvement du cytoplasme." },
        { key: 'd', text: "Examiné au microscope, la cellule végétale vivante, le cytoplasme est transparent incolore et homogène." }
      ],
      correct: 'b'
    },
    {
      question: "74 - Les constituants de la cellule végétale :",
      options: [
        { key: 'a', text: "La cellule morte, la cyclose est accélérée par la chaleur." },
        { key: 'b', text: "La cyclose n’a pas de mouvement précis." },
        { key: 'c', text: "La cellule morte, le cytoplasme, plus ou moins rétracté, devient granuleux et perd la transparence et l'homogénéité." },
        { key: 'd', text: "La cyclose se fait de temps en temps chez la cellule vivante." }
      ],
      correct: 'c'
    },
    {
      question: "75 - Les grandes catégories de substances organiques dans les végétaux sont :",
      options: [
        { key: 'a', text: "Les sucres, les graisses et protides." },
        { key: 'b', text: "Les glucides, protides et les graisses." },
        { key: 'c', text: "Les sucres, lipides et acides aminés." },
        { key: 'd', text: "Les lipides, glucides et protides." }
      ],
      correct: 'd'
    },
    {
      question: "76 - Les substances minérales dans les végétaux sont :",
      options: [
        { key: 'a', text: "Le Ca, S, P, K et Mg." },
        { key: 'b', text: "Le Ca, Na, K, Mn et Mg." },
        { key: 'c', text: "Le Ca, K, S, Mn et Na." },
        { key: 'd', text: "Le Ca, S, P, Mn et Mg." }
      ],
      correct: 'a'
    },
    {
      question: "77 - Les grandes catégories de substances organiques dans les végétaux :",
      options: [
        { key: 'a', text: "Les lipides phosphorés ou phospholipides se trouvent à l’état libres ou inclusions." },
        { key: 'b', text: "Le ribose, qui entre dans la constitution des ribonucléoprotéides cytoplasmiques." },
        { key: 'c', text: "Les hétéroprotéides sont des protides simples." },
        { key: 'd', text: "Les lipides de constitution sont indépendants du cytoplasme fondamental." }
      ],
      correct: 'b'
    },
    {
      question: "78 - La charge en acides ribonucléiques varie considérablement d'un tissu à un autre :",
      options: [
        { key: 'a', text: "Les cellules différenciées sont riches en acides ribonucléiques." },
        { key: 'b', text: "Les cellules adultes sont riches en acides ribonucléiques." },
        { key: 'c', text: "Dans les cellules méristématiques, le cytoplasme est riche en acides ribonucléiques." },
        { key: 'd', text: "Les cellules âgées sont riches en acides ribonucléiques." }
      ],
      correct: 'c'
    },
    {
      question: "79 - Les chondriosomes ou chondriome :",
      options: [
        { key: 'a', text: "Les nombreux petits grains sphériques, sont des chondriochontes." },
        { key: 'b', text: "Les filaments allongés, mais étroits, sont des mitochondries." },
        { key: 'c', text: "Les chondriocontes sont des petits grains sphériques et les mitochondries sont des filaments flexueux." },
        { key: 'd', text: "Les chondriosomes ont deux aspects composés de mitochondries et de chondriochontes." }
      ],
      correct: 'd'
    },
    {
      question: "80 - On peut colorer les chondriosomes par les colorants pour observation au microscope :",
      options: [
        { key: 'a', text: "Par le colorant Hématoxyline qui colore les chondriosomes en noir." },
        { key: 'b', text: "Par le bleu de méthylène qui colore les chondriosomes en bleu." },
        { key: 'c', text: "Par le Rouge Soudan qui colore les chondriosomes en rouge." },
        { key: 'd', text: "Par le Rouge Congo qui colore les chondriosomes en rouge." }
      ],
      correct: 'a'
    },
    {
      question: "81 - Les chondriosomes sont fragiles :",
      options: [
        { key: 'a', text: "En milieu hypertonique." },
        { key: 'b', text: "En milieu hypotonique (eau distillée)." },
        { key: 'c', text: "En milieu acide." },
        { key: 'd', text: "En milieu basique." }
      ],
      correct: 'b'
    },
    {
      question: "82 - On peut dissoudre les chondriosomes par les solvants des lipides :",
      options: [
        { key: 'a', text: "Par l’acide nitrique." },
        { key: 'b', text: "Par l’acide acétique." },
        { key: 'c', text: "Par l’acétone ou l’alcool éthylique." },
        { key: 'd', text: "Par l’éther." }
      ],
      correct: 'c'
    },
    {
      question: "83-Les chondriosomes contiennent également certaines vitamines et des enzymes :",
      options: [
        { key: 'a', text: "vitamines du groupe B et enzyme oxydatif" },
        { key: 'b', text: "vitamines D et E et enzyme réductif" },
        { key: 'c', text: "vitamines C et D et enzyme cytochrome-oxydase" },
        { key: 'd', text: "vitamines A et C et enzyme cytochrome-oxydase" }
      ],
      correct: 'd'
    },
    {
      question: "84-Les plastes qui ont des pigments verts sont :",
      options: [
        { key: 'a', text: "les chloroplastes" },
        { key: 'b', text: "les amyloplastes" },
        { key: 'c', text: "les protéoplastes" },
        { key: 'd', text: "les leucoplastes" }
      ],
      correct: 'a'
    },
    {
      question: "85-Chez les végétaux vasculaires le chloroplaste contient :",
      options: [
        { key: 'a', text: "de nombreux gouttelettes de lipides" },
        { key: 'b', text: "de nombreux grains verts, les granas disposés dans un liquide, le stroma" },
        { key: 'c', text: "de nombreuses sortes de sucres" },
        { key: 'd', text: "de nombreux pigments verts" }
      ],
      correct: 'b'
    },
    {
      question: "86-Les substances qui constituent les chloroplastes sont :",
      options: [
        { key: 'a', text: "les glucides, les lipides et les protides" },
        { key: 'b', text: "les colorants verts, jaunes et oranges" },
        { key: 'c', text: "les chlorophylles, la xanthophylle et le carotene" },
        { key: 'd', text: "les enzymes et grains d’amidon" }
      ],
      correct: 'c'
    },
    {
      question: "87-Les leucoplastes sont :",
      options: [
        { key: 'a', text: "des plastes incolores" },
        { key: 'b', text: "des chloroplastes sans pigments verts" },
        { key: 'c', text: "des amyloplastes sans grains d’amidon" },
        { key: 'd', text: "des plastes incolores, sphériques, filamenteux ou vésiculeux" }
      ],
      correct: 'd'
    },
    {
      question: "88-On peut colorer les amyloplastes par le réactif :",
      options: [
        { key: 'a', text: "réactif iodo-ioduré" },
        { key: 'b', text: "réactif vert d’iode" },
        { key: 'c', text: "réactif rouge Congo" },
        { key: 'd', text: "réactif violet de gentiane" }
      ],
      correct: 'a'
    },
    {
      question: "89-Les chromoplastes sont :",
      options: [
        { key: 'a', text: "des plastes colorés en jaune comme la zanthophylle" },
        { key: 'b', text: "des plastes colorés par des pigments autres que la chlorophylle (la zanthophylle ...)" },
        { key: 'c', text: "des plastes colorés en rouge comme le carotène et le lycopène" },
        { key: 'd', text: "des plastes contenant le lycopène à l’état de cristaux" }
      ],
      correct: 'b'
    },
    {
      question: "90-Forme et structure du noyau :",
      options: [
        { key: 'a', text: "la cellule jeune a un noyau aplati" },
        { key: 'b', text: "la cellule âgée a un noyau sphérique" },
        { key: 'c', text: "le noyau en général lenticulaire est sphérique dans les cellules méristématiques" },
        { key: 'd', text: "les cellules mortes ont des noyaux aplatis" }
      ],
      correct: 'c'
    },
    {
      question: "91-Les nucléoles se trouvent dans le noyau, ils sont :",
      options: [
        { key: 'a', text: "très opaques" },
        { key: 'b', text: "acidophyles" },
        { key: 'c', text: "en général de forme aplatie" },
        { key: 'd', text: "colorés par le bleu de méthylène et la pyronine" }
      ],
      correct: 'd'
    },
    {
      question: "92-Les nucléoles sont :",
      options: [
        { key: 'a', text: "au nombre de 4 à 8" },
        { key: 'b', text: "au nombre de 5 à 7" },
        { key: 'c', text: "situés dans le cytoplasme" },
        { key: 'd', text: "plus volumineux, 2 à 8 fois plus grand que les cellules adultes" }
      ],
      correct: 'd'
    },
    {
      question: "93-Les nucléoles sont :",
      options: [
        { key: 'a', text: "au nombre de 1 à 3 en général" },
        { key: 'b', text: "colorés par les colorants acides" },
        { key: 'c', text: "des inclusions nucléaires et se trouvent dans le cytoplasme" },
        { key: 'd', text: "des inclusions nucléaires à caractères basiques" }
      ],
      correct: 'a'
    },
    {
      question: "94-La chromatine est un constituant nucléaire :",
      options: [
        { key: 'a', text: "ne présentant pas d’affinité pour les colorants" },
        { key: 'b', text: "présentant une grande affinité pour les colorants basiques" },
        { key: 'c', text: "elle se trouve dans les nucléoles" },
        { key: 'd', text: "présentant un aspect de masse homogène" }
      ],
      correct: 'b'
    },
    {
      question: "95-Les noyaux dont le réseau de chromatine prend la forme 'au repos' des chromosomes, sont appelés :",
      options: [
        { key: 'a', text: "noyaux 'réticulés' sans chromocentre" },
        { key: 'b', text: "noyaux 'réticulés' à chromocentres" },
        { key: 'c', text: "noyaux aréticulés et à 'euchromocentres'" },
        { key: 'd', text: "noyaux des tissus morts" }
      ],
      correct: 'c'
    },
    {
      question: "96-La composition chimique du noyau utilisant la réaction de Feulgen et celle de Brachet :",
      options: [
        { key: 'a', text: "les nucléoles sont constitués par des protéides simples ou holoprotéides" },
        { key: 'b', text: "la chromatine est constituée par des ribonucléoprotéides" },
        { key: 'c', text: "les nucléoles sont constitués de désoxyribonucléoprotéides" },
        { key: 'd', text: "la chromatine et les nucléoles sont essentiellement constitués par des nucléoprotéides" }
      ],
      correct: 'd'
    },
    {
      question: "97-Les vacuoles ou vacuome sont :",
      options: [
        { key: 'a', text: "sont des cavités ménagées dans le cytoplasme et contenant le suc vacuolaire" },
        { key: 'b', text: "sont de grande taille chez les cellules animales" },
        { key: 'c', text: "sont de petite taille chez les cellules végétales adultes" },
        { key: 'd', text: "sont des cavités creuses des cellules mortes" }
      ],
      correct: 'a'
    },
    {
      question: "98-L’aspect et formes des vacuoles :",
      options: [
        { key: 'a', text: "la plasmolyse consécutive à la suite d'une entrée d'eau dans la cellule" },
        { key: 'b', text: "la plasmolyse est la diminution du volume des vacuoles et la turgescence est l’augmentation du volume vacuolaire" },
        { key: 'c', text: "la turgescence consécutive à une perte d'eau" },
        { key: 'd', text: "ne changent pas suivant l’état de la cellule" }
      ],
      correct: 'b'
    },
    {
      question: "99-L’aspect et formes des vacuoles :",
      options: [
        { key: 'a', text: "dans les cellules adultes les vacuoles sont petites" },
        { key: 'b', text: "dans les cellules méristématiques les vacuoles sont grandes" },
        { key: 'c', text: "dans le parenchyme de réserve des graines mûres les vacuoles sont déshydratées" },
        { key: 'd', text: "dans les graines qui commencent à pousser les vacuoles sont déshydratés" }
      ],
      correct: 'c'
    },
    {
      question: "100-Les substances dissoutes dans le suc vacuolaire :",
      options: [
        { key: 'a', text: "la couleur de l’anthocyane en pH acide est bleue" },
        { key: 'b', text: "la couleur de l’anthocyane en pH basique est rouge" },
        { key: 'c', text: "le composé oxyflavonique donne la couleur violette" },
        { key: 'd', text: "le suc vacuolaire est coloré par un pigment dissout : anthocyane ou composés oxyflavoniques" }
      ],
      correct: 'd'
    },
    {
      question: "101-Les substances organiques dissoutes dans le suc vacuolaire :",
      options: [
        { key: 'a', text: "les acides organiques, glucides, tanins, protéides, alcaloïdes" },
        { key: 'b', text: "les substances colorées, l’amidon, les chloroplastes" },
        { key: 'c', text: "les acides organiques, tanins, les lipides, les cristaux d’oxalate" },
        { key: 'd', text: "les chloroplastes, les glucides, l’amidon, les lipides" }
      ],
      correct: 'a'
    },
    {
      question: "102-Les substances à l’état figuré dans le suc vacuolaire :",
      options: [
        { key: 'a', text: "l’oxalate de calcium sous forme de masse" },
        { key: 'b', text: "sont l’oxalate de calcium, phosphatides, protides" },
        { key: 'c', text: "l’oxalate de calcium sous forme de raphides dans l’écaille d’oignon" },
        { key: 'd', text: "l’oxalate de calcium sous forme de cristaux pyramidaux dans l’écorce du fruit de banane" }
      ],
      correct: 'b'
    },
    {
      question: "103-Les inclusions lipidiques et les huiles essentielles :",
      options: [
        { key: 'a', text: "Les inclusions lipidiques et les huiles essentielles sont solubles dans l’eau" },
        { key: 'b', text: "les inclusions lipidiques ne sont pas solubles dans les solvants organiques" },
        { key: 'c', text: "Les inclusions lipidiques et les huiles essentielles sont insolubles dans l’eau" },
        { key: 'd', text: "les huiles essentielles sont en abondances dans les graines oléagineuses" }
      ],
      correct: 'c'
    },
    {
      question: "104-Les Amyloplastes ou plastes amylifères :",
      options: [
        { key: 'a', text: "les plastes amylifères se trouvent dans la tige" },
        { key: 'b', text: "l’amyloplaste donne naissance à des grains de chlorophylle" },
        { key: 'c', text: "l’amyloplaste produit l’amidon à l’obscurité" },
        { key: 'd', text: "le hile est un point de naissance de l’amidon" }
      ],
      correct: 'd'
    },
    {
      question: "105-On peut détecter la présence de l’amidon par :",
      options: [
        { key: 'a', text: "le réactif iodo-ioduré qui colore l’amidon en bleu ou violet" },
        { key: 'b', text: "l’alcool éthylique" },
        { key: 'c', text: "le bleu de méthylène" },
        { key: 'd', text: "le vert d’iode" }
      ],
      correct: 'a'
    },
    {
      question: "106-Les protéoplastes contiennent des substances protéiques décelables par :",
      options: [
        { key: 'a', text: "le réactif de Rouge de Soudan" },
        { key: 'b', text: "le réactif de Millon" },
        { key: 'c', text: "le réactif de Dragendorff" },
        { key: 'd', text: "le réactif de Bleu de méthylène" }
      ],
      correct: 'b'
    },
    {
      question: "107-Les plastes ne sont observables que dans :",
      options: [
        { key: 'a', text: "les tissus méristématiques" },
        { key: 'b', text: "les tissus non différenciés" },
        { key: 'c', text: "les tissus différenciés" },
        { key: 'd', text: "les tissus morts" }
      ],
      correct: 'c'
    },
    {
      question: "108-Origine et différenciation des plastes :",
      options: [
        { key: 'a', text: "les amyloplastes proviennent de la division des chondriosomes" },
        { key: 'b', text: "les chromoplastes proviennent des chloroplastes" },
        { key: 'c', text: "les chloroplastes proviennent des amyloplastes" },
        { key: 'd', text: "Les plastes proviennent de la différenciation des chondriosomes" }
      ],
      correct: 'd'
    },
    {
      question: "109-Forme et structure du noyau :",
      options: [
        { key: 'a', text: "dans les cellules méristématiques le noyau est au centre et sphérique" },
        { key: 'b', text: "dans les cellules adultes le noyau est grand" },
        { key: 'c', text: "dans les cellules mortes le noyau est aplati" },
        { key: 'd', text: "dans les cellules âgées le noyau est sphérique" }
      ],
      correct: 'a'
    },
    {
      question: "110-Forme et structure du noyau :",
      options: [
        { key: 'a', text: "On distingue dans un noyau 4 à 6 nucléoles" },
        { key: 'b', text: "On distingue dans un noyau : la membrane nucléaire, le suc nucléaire et les nucléoles" },
        { key: 'c', text: "dans le noyau les nucléoles sont lenticulaires" },
        { key: 'd', text: "les nucléoles sont facilement colorables par les colorants acides" }
      ],
      correct: 'b'
    },
    {
      question: "111-Modification de la membrane squelettique :",
      options: [
        { key: 'a', text: "la lignification est une imprégnation de la membrane squelettique par la silice" },
        { key: 'b', text: "la minéralisation est une imprégnation de la membrane squelettique par la lignine" },
        { key: 'c', text: "la modification assurant la rigidité se fait par la lignification et la minéralisation" },
        { key: 'd', text: "la lignification est une imprégnation de la membrane squelettique par le carbonate de calcium" }
      ],
      correct: 'c'
    },
    {
      question: "112-Modification de la membrane squelettique :",
      options: [
        { key: 'a', text: "la cutinisation est un dépôt de subérine, en lamelles successives, sur la surface interne de la membrane pecto-cellulosique" },
        { key: 'b', text: "la modification assurant l’imperméabilité se fait par la calcification et la minéralisation" },
        { key: 'c', text: "la subérification est une imprégnation des cellules épidermiques par de la cutine" },
        { key: 'd', text: "la modification assurant l’imperméabilité se fait par la cutinisation et la subérification" }
      ],
      correct: 'd'
    },
    {
      question: "113-La membrane squelettique :",
      options: [
        { key: 'a', text: "L’hydrolyse complète de la cellulose donne des molécules de glucose" },
        { key: 'b', text: "L’hydrolyse complète de la cellulose donne de l’arabinose et galactose" },
        { key: 'c', text: "L’hydrolyse complète de la cellulose donne de la mannose et arabinose" },
        { key: 'd', text: "L’hydrolyse complète de la cellulose donne du xylose et mannose" }
      ],
      correct: 'a'
    },
    {
      question: "114-La membrane squelettique :",
      options: [
        { key: 'a', text: "les hémicelluloses donnent à l’hydrolyse des pentoses et des glucoses" },
        { key: 'b', text: "les hémicelluloses donnent à l'hydrolyse des pentoses et des hexoses" },
        { key: 'c', text: "les hémicelluloses donnent à l’hydrolyse des hexoses et des glucoses" },
        { key: 'd', text: "les hémicelluloses donnent à l’hydrolyse des hexoses et de l’arabinose" }
      ],
      correct: 'b'
    },
    {
      question: "115-La membrane squelettique :",
      options: [
        { key: 'a', text: "l’hydrolyse de la callose donne des mannoses" },
        { key: 'b', text: "l’hydrolyse de la callose donne des arabinose" },
        { key: 'c', text: "l’hydrolyse de la callose donne du glucose" },
        { key: 'd', text: "l’hydrolyse de la callose donne des xyloses" }
      ],
      correct: 'c'
    },
    {
      question: "116-La floraison :",
      options: [
        { key: 'a', text: "la plante annuelle peut vivre plus d’un an" },
        { key: 'b', text: "la plante bisannuelle peut vivre plus de deux ans" },
        { key: 'c', text: "la plante vivace peut vivre moins d’un an" },
        { key: 'd', text: "Pour les plantes polycarpiques, la floraison a lieu de nombreuses fois dans la vie" }
      ],
      correct: 'd'
    },
    {
      question: "117-La floraison :",
      options: [
        { key: 'a', text: "les espèces polycarpiques sont toujours pluriannuelles" },
        { key: 'b', text: "les espèces polycarpiques sont toujours annuelles" },
        { key: 'c', text: "les espèces monocarpiques donnent des fleurs plusieurs fois" },
        { key: 'd', text: "les espèces monocarpiques ne peuvent pas être vivaces" }
      ],
      correct: 'a'
    },
    {
      question: "118-La nutrition et floraison :",
      options: [
        { key: 'a', text: "le rapport C/N (ou glucides/nitrates) = 35 : il y a floraison" },
        { key: 'b', text: "le rapport C/N = 15 à 20 : il y a floraison" },
        { key: 'c', text: "le rapport C/N = 45 : il y a floraison" },
        { key: 'd', text: "le rapport C/N = 55 : il y a floraison" }
      ],
      correct: 'b'
    },
    {
      question: "119-Lorsque la floraison est directement fonction des conditions thermiques :",
      options: [
        { key: 'a', text: "Le froid rend fatale la formation des ébauches florales" },
        { key: 'b', text: "La température ne permet pas la manifestation morphologique de la maturité de floraison" },
        { key: 'c', text: "Le froid permet l'acquisition de la seule maturité de floraison" },
        { key: 'd', text: "La température retarde la formation des ébauches florales ou la mise à fleurs" }
      ],
      correct: 'c'
    },
    {
      question: "120-La floraison et conditions thermiques :",
      options: [
        { key: 'a', text: "Les conditions externes sont défavorables à la croissance et floraison" },
        { key: 'b', text: "Le froid ne permet pas l’acquisition de la seule maturité de floraison" },
        { key: 'c', text: "La température retarde la formation des ébauches florales ou la mise à fleurs" },
        { key: 'd', text: "La température agit sur les dormances des boutons floraux" }
      ],
      correct: 'd'
    },
    {
      question: "121-Les différentes parties externes de la fleur sont :",
      options: [
        { key: 'a', text: "la bractée, le pédoncule floral, le réceptacle floral et la fleur" },
        { key: 'b', text: "la bractée-mère, le pédoncule floral, l’étamine, le pistil" },
        { key: 'c', text: "l’étamine, le pistil, les grains de pollen, l’étamine" },
        { key: 'd', text: "le pistil, l’étamine, les grains de pollen, les pétales" }
      ],
      correct: 'a'
    },
    {
      question: "122-Les différentes parties de la fleur, en général, de l’extérieur vers l’intérieur sont :",
      options: [
        { key: 'a', text: "les sépales, le calice, la corolle, et les pétales" },
        { key: 'b', text: "le calice, la corolle, l’androcée et le pistil" },
        { key: 'c', text: "les pétales, les étamines, les sépales et l’ovaire" },
        { key: 'd', text: "le pistil, la corolla, le calice, l’androcée et les grains de pollen" }
      ],
      correct: 'b'
    },
    {
      question: "123-Les différentes parties de la fleur femelle ♀ sont :",
      options: [
        { key: 'a', text: "le pistil, le stigmate et le style" },
        { key: 'b', text: "l’androcée, le filet et les grains de pollen" },
        { key: 'c', text: "l’ovaire (contenant des ovules), le style et le stigmate" },
        { key: 'd', text: "l’étamine, le filet et l’anthère" }
      ],
      correct: 'c'
    },
    {
      question: "124-Les différentes parties de la fleur mâle ♂ sont :",
      options: [
        { key: 'a', text: "l’anthère, l’androcée et le filet" },
        { key: 'b', text: "le pistil, le gynécée et les grains de pollen" },
        { key: 'c', text: "le filet, l’anthère et les ovules" },
        { key: 'd', text: "le filet, l’anthère et les grains de pollen" }
      ],
      correct: 'd'
    },
    {
      question: "125-Les différentes parties de la fleur :",
      options: [
        { key: 'a', text: "Le calice est l’ensemble des sépales de la fleur" },
        { key: 'b', text: "l’androcée est l’ensemble des pistils de la fleur" },
        { key: 'c', text: "le gynécée est l’ensemble des étamines de la fleur" },
        { key: 'd', text: "le calice est l’ensemble des pétales de la fleur" }
      ],
      correct: 'a'
    },
    {
      question: "126-Les différentes parties de la fleur :",
      options: [
        { key: 'a', text: "le calice est l’ensemble des pétales de la fleur" },
        { key: 'b', text: "la corolle est l’ensemble des pétales de la fleur" },
        { key: 'c', text: "l’androcée est l’ensemble des pistils de la fleur" },
        { key: 'd', text: "le gynécée est l’ensemble des étamines de la fleur" }
      ],
      correct: 'b'
    },
    {
      question: "127-Les différentes parties de la fleur :",
      options: [
        { key: 'a', text: "l’androcée est l’ensemble de pistils de la fleur" },
        { key: 'b', text: "la corolle est l’ensemble de sépales de la fleur" },
        { key: 'c', text: "Le gynécée est l’ensemble des pistils de la fleur" },
        { key: 'd', text: "le calice est l’ensemble des pétales de la fleur" }
      ],
      correct: 'c'
    },
    {
      question: "128-Les différentes parties de la fleur :",
      options: [
        { key: 'a', text: "la corolle est l’ensemble de sépales de la fleur" },
        { key: 'b', text: "l’androcée est l’ensemble de pistils de la fleur" },
        { key: 'c', text: "le calice est l’ensemble des pétales de la fleur" },
        { key: 'd', text: "l’androcée est l’ensemble des étamines de la fleur" }
      ],
      correct: 'd'
    },
    {
      question: "129-Les pétales sont généralement colorées par :",
      options: [
        { key: 'a', text: "les pigments caroténoïdes et les anthocyanes" },
        { key: 'b', text: "les pigments caroténoïdes sont de couleurs : rose, bleu, lilas, violet" },
        { key: 'c', text: "les pigments de toutes les couleurs" },
        { key: 'd', text: "les pigments anthocyanes sont de couleurs : jaunes, oranges, rouges" }
      ],
      correct: 'a'
    },
    {
      question: "130-Les différentes sortes de corolles sont :",
      options: [
        { key: 'a', text: "la fleur du Nénuphar est gamopétale" },
        { key: 'b', text: "la fleur de la Rose a des pétales irrégulières" },
        { key: 'c', text: "la fleur de Liseron d’eau est dialypétale" },
        { key: 'd', text: "la fleur de l’Haricot est régulière" }
      ],
      correct: 'b'
    },
    {
      question: "131-Les types floraux :",
      options: [
        { key: 'a', text: "la fleur des Dicotylédones est de type 3" },
        { key: 'b', text: "la fleur des Monocotylédones est de type 4" },
        { key: 'c', text: "la fleur des Monocotylédones est de type 3" },
        { key: 'd', text: "la fleur des Monocotylédones est de type 5" }
      ],
      correct: 'c'
    },
    {
      question: "132-La structure du grain de pollen :",
      options: [
        { key: 'a', text: "le grain de pollen a un noyau reproducteur qui donnera 2 anthérozoïdes" },
        { key: 'b', text: "le grain de pollen contient 4 pores servant à la germination du tube pollinique" },
        { key: 'c', text: "le grain de pollen est pluricellulaire, noyau végétatif" },
        { key: 'd', text: "le grain de pollen est une cellule renfermant 2 noyaux, le noyau reproducteur et noyau végétatif" }
      ],
      correct: 'd'
    },
    {
      question: "133-La structure du grain de pollen :",
      options: [
        { key: 'a', text: "le grain de pollen contient 2 noyaux et délimité par 2 membranes" },
        { key: 'b', text: "la membrane interne est appelée exine" },
        { key: 'c', text: "la membrane externe est appelée intine" },
        { key: 'd', text: "le noyau végétatif donne 2 anthérozoïdes pendant la germination du pollen" }
      ],
      correct: 'a'
    },
    {
      question: "134-Germination du grain de pollen :",
      options: [
        { key: 'a', text: "le grain de pollen en tombant sur la terre peut germer" },
        { key: 'b', text: "le grain de pollen en tombant sur le stigmate germe et donne le tube pollinique" },
        { key: 'c', text: "le grain de pollen en tombant sur la fleur en bouton peut germer" },
        { key: 'd', text: "le grain de pollen en tombant sur la fleur flétrie peut germer" }
      ],
      correct: 'b'
    },
    {
      question: "135-Pendant la germination du grain de pollen :",
      options: [
        { key: 'a', text: "le grain de pollen donne 3 tubes polliniques par les 3 pores" },
        { key: 'b', text: "le noyau végétatif et noyau reproducteur restent dans le grain de pollen" },
        { key: 'c', text: "le protoplasme et les 2 noyaux suivent le bout du tube pollinique" },
        { key: 'd', text: "le noyau reproducteur a des activités avant le noyau végétatif" }
      ],
      correct: 'c'
    },
    {
      question: "136-Le stigmate est :",
      options: [
        { key: 'a', text: "lisse au bout du style" },
        { key: 'b', text: "granuleux au bout du style" },
        { key: 'c', text: "sphérique au bout du style" },
        { key: 'd', text: "une papille et contient un liquide visqueux et sucré" }
      ],
      correct: 'd'
    },
    {
      question: "137-Les ovules sont :",
      options: [
        { key: 'a', text: "situés dans les carpelles de l’ovaire" },
        { key: 'b', text: "situés en dehors des carpelles" },
        { key: 'c', text: "situés en dessous de l’ovaire" },
        { key: 'd', text: "situés dans les graines" }
      ],
      correct: 'a'
    },
    {
      question: "138-Le rôle des différentes parties de la fleur :",
      options: [
        { key: 'a', text: "le calice se trouve près de l’androcée" },
        { key: 'b', text: "l’androcée et le gynécée jouent le rôle dans la reproduction" },
        { key: 'c', text: "la corolle se trouve à la partie externe de la fleur" },
        { key: 'd', text: "calice et corolle sont importants dans la reproduction" }
      ],
      correct: 'b'
    },
    {
      question: "139-Les inflorescences indéfinis sont :",
      options: [
        { key: 'a', text: "cyme unipare, thyrse, capitule" },
        { key: 'b', text: "cyme bipare, thyrse, grappe" },
        { key: 'c', text: "épi, corymbe, ombelle, grappe" },
        { key: 'd', text: "cyme bipare, chaton, corymbe" }
      ],
      correct: 'c'
    },
    {
      question: "140-On appelle plantes monocarpiques celles qui :",
      options: [
        { key: 'a', text: "fleurissent plusieurs fois après un nombre d'années d'existence et donnent des graines plusieurs fois" },
        { key: 'b', text: "fleurissent deux fois après un nombre d'années d'existence et donnent des graines" },
        { key: 'c', text: "ne fleurissent et ne donnent pas de fruits" },
        { key: 'd', text: "ne fleurissent qu'une seule fois après un nombre d'années d'existence, puis meurent après la formation de leurs graines" }
      ],
      correct: 'd'
    },
    {
      question: "141-L’arcure, greffe, repiquage, transplantation, taille, pincement :",
      options: [
        { key: 'a', text: "peuvent hâter l'apparition de floraison" },
        { key: 'b', text: "peuvent augmenter le poids de la récolte" },
        { key: 'c', text: "peuvent diminuer la durée de vie de la plante" },
        { key: 'd', text: "ne peuvent pas hâter l’apparition de la floraison" }
      ],
      correct: 'a'
    },
    {
      question: "142-Les jours longs favorisent la formation :",
      options: [
        { key: 'a', text: "des organes végétatifs" },
        { key: 'b', text: "des organes de production" },
        { key: 'c', text: "des organes de réserve" },
        { key: 'd', text: "des huiles essentielles ou essences" }
      ],
      correct: 'b'
    },
    {
      question: "143-Les jours courts activent la formation :",
      options: [
        { key: 'a', text: "des organes végétatifs" },
        { key: 'b', text: "des huiles essentielles" },
        { key: 'c', text: "des organes de réserve, les tubercules" },
        { key: 'd', text: "des organes de production" }
      ],
      correct: 'c'
    },
    {
      question: "144-La fleur hermaphrodite permet la pollinisation directe en cas de :",
      options: [
        { key: 'a', text: "protandrie" },
        { key: 'b', text: "protogynie" },
        { key: 'c', text: "où il y a avortement de fleur mâle ou de fleur femelle" },
        { key: 'd', text: "la fleur mâle et la fleur femelle sont mûres de façon synchronique" }
      ],
      correct: 'd'
    },
    {
      question: "145-Les plantes monoïques :",
      options: [
        { key: 'a', text: "les fleurs sont unisexuées, mais l'individu est hermaphrodite" },
        { key: 'b', text: "la plante ne porte que les fleurs mâles" },
        { key: 'c', text: "la plante ne porte que les fleurs femelles" },
        { key: 'd', text: "l’organe mâle et l’organe femelle sont dans la même fleur" }
      ],
      correct: 'a'
    },
    {
      question: "146-Les plantes dioïques :",
      options: [
        { key: 'a', text: "l’organe mâle et l’organe femelle sont dans la même fleur" },
        { key: 'b', text: "les fleurs sont unisexuées, et l’individu est aussi unisexué" },
        { key: 'c', text: "la fleur mâle et la fleur femelle sont sur le même pied" },
        { key: 'd', text: "la plante porte des fleurs hermaphrodites" }
      ],
      correct: 'b'
    },
    {
      question: "147-La dissémination des grains de pollen et la pollinisation :",
      options: [
        { key: 'a', text: "la pollinisation est facile quand la fleur mâle est loin de la fleur femelle" },
        { key: 'b', text: "pour la fleur bisexuée la pollinisation est assurée par les insectes" },
        { key: 'c', text: "le plus souvent la dissémination du pollen est assurée par un facteur externe : le vent ou les animaux" },
        { key: 'd', text: "la pollinisation est facile quand le stigmate de la fleur femelle est plus haut que la fleur mâle" }
      ],
      correct: 'c'
    },
    {
      question: "148-La fusion des éléments du grain de pollen et ceux de l’ovule :",
      options: [
        { key: 'a', text: "Le grain de pollen tombe sur le stigmate de la fleur femelle" },
        { key: 'b', text: "Le grain de pollen germe en donnant le tube pollinique" },
        { key: 'c', text: "Le noyau reproducteur se divise en donnant deux anthérozoïdes à n chromosomes" },
        { key: 'd', text: "Le noyau reproducteur se divise en deux anthérozoïdes ou gamètes mâles qui vont fusionner avec les éléments de l’ovule" }
      ],
      correct: 'd'
    },
    {
      question: "149-La pollinisation directe :",
      options: [
        { key: 'a', text: "Le pollen des étamines d'une fleur est transporté sur le stigmate de la même fleur" },
        { key: 'b', text: "Le pollen des étamines d’une fleur est transporté sur le stigmate d’une autre fleur" },
        { key: 'c', text: "Le grain de pollen ne tombe pas sur le stigmate d’autre fleur" },
        { key: 'd', text: "Le stigmate reçoit le grain de pollen d’autre fleur" }
      ],
      correct: 'a'
    },
    {
      question: "150-La pollinisation par les insectes (pollinisation indirecte) :",
      options: [
        { key: 'a', text: "Le pollen est transporté par les insectes sur d’autres fleurs" },
        { key: 'b', text: "Le pollen fixé aux poils des insectes et, en pénétrant dans d'autres fleurs, ils laissent des grains de pollen sur les stigmates gluants" },
        { key: 'c', text: "La pollinisation se fait par les insectes qui visitent les fleurs" },
        { key: 'd', text: "Le stigmate d’une fleur reçoit le grain de pollen d’autre fleur" }
      ],
      correct: 'b'
    },
    {
      question: "151-Sont des fruits charnus :",
      options: [
        { key: 'a', text: "Fruits des Euphorbiaceae" },
        { key: 'b', text: "Fruits des Caesalpiniaceae" },
        { key: 'c', text: "Les hespérides et les péponides" },
        { key: 'd', text: "Fruits des Papilionaceae" }
      ],
      correct: 'c'
    },
    {
      question: "152-Sont des fruits secs :",
      options: [
        { key: 'a', text: "les oranges" },
        { key: 'b', text: "fruits des Cucurbitaceae" },
        { key: 'c', text: "fruits des Solanaceae" },
        { key: 'd', text: "La gousse, le follicule, la silique et les capsules" }
      ],
      correct: 'd'
    },
    {
      question: "153-Sont des fruits secs :",
      options: [
        { key: 'a', text: "L’akène, la samare et le caryopse" },
        { key: 'b', text: "fruits des Cucurbitaceae" },
        { key: 'c', text: "fruits des Solanaceae" },
        { key: 'd', text: "les oranges" }
      ],
      correct: 'a'
    },
    {
      question: "154-La partie essentielle de la graine est :",
      options: [
        { key: 'a', text: "Le tégument" },
        { key: 'b', text: "L’embryon" },
        { key: 'c', text: "L’albumen" },
        { key: 'd', text: "la radicule" }
      ],
      correct: 'b'
    },
    {
      question: "155-Le type de semence de Cruciferae est :",
      options: [
        { key: 'a', text: "l’akène" },
        { key: 'b', text: "la gousse" },
        { key: 'c', text: "la silique" },
        { key: 'd', text: "le caryopse" }
      ],
      correct: 'c'
    },
    {
      question: "156-Le type de semence de Gramineae est :",
      options: [
        { key: 'a', text: "la silique" },
        { key: 'b', text: "l’akène" },
        { key: 'c', text: "la capsule" },
        { key: 'd', text: "le caryopse" }
      ],
      correct: 'd'
    },
    {
      question: "157-Le type de semence de Composées (Asteraceae) est :",
      options: [
        { key: 'a', text: "l’akène" },
        { key: 'b', text: "la capsule" },
        { key: 'c', text: "le caryopse" },
        { key: 'd', text: "la gousse" }
      ],
      correct: 'a'
    },
    {
      question: "158-Les fruits secs déhiscents sont :",
      options: [
        { key: 'a', text: "La baie et la drupe" },
        { key: 'b', text: "Le follicule, la gousse, la silique et la capsule" },
        { key: 'c', text: "La samare et le caryopse" },
        { key: 'd', text: "L’akène et la samare" }
      ],
      correct: 'b'
    },
    {
      question: "159-Les fruits secs indéhiscents sont :",
      options: [
        { key: 'a', text: "La drupe et la baie" },
        { key: 'b', text: "Le follicule et la gousse" },
        { key: 'c', text: "L’akène, la samare et le caryopse" },
        { key: 'd', text: "La silique et la capsule" }
      ],
      correct: 'c'
    },
    {
      question: "160-Le tissu nourricier de la graine est :",
      options: [
        { key: 'a', text: "L’embryon" },
        { key: 'b', text: "Le tégument" },
        { key: 'c', text: "Le gemmule" },
        { key: 'd', text: "L’albumen" }
      ],
      correct: 'd'
    },
    {
      question: "161-L’embryon de la graine se compose de :",
      options: [
        { key: 'a', text: "la tigelle qui est une petite tige" },
        { key: 'b', text: "la radicule qui est un bourgeon" },
        { key: 'c', text: "la gemmule qui est une racine courte" },
        { key: 'd', text: "les cotylédons qui sont des feuilles" }
      ],
      correct: 'a'
    },
    {
      question: "162-La graine qui contient le plus de protéines est :",
      options: [
        { key: 'a', text: "Le tournesol" },
        { key: 'b', text: "Le soja" },
        { key: 'c', text: "L’arachide" },
        { key: 'd', text: "Le maïs" }
      ],
      correct: 'b'
    },
    {
      question: "163-La graine qui contient le plus de lipides est :",
      options: [
        { key: 'a', text: "Le maïs" },
        { key: 'b', text: "Le soja" },
        { key: 'c', text: "L’arachide" },
        { key: 'd', text: "Le riz" }
      ],
      correct: 'c'
    },
    {
      question: "164-La graine qui contient le plus de glucides est :",
      options: [
        { key: 'a', text: "Le tournesol" },
        { key: 'b', text: "Le soja" },
        { key: 'c', text: "L’arachide" },
        { key: 'd', text: "Le maïs" }
      ],
      correct: 'd'
    },
    {
      question: "165-Le facteur externe le plus important pour faire lever la dormance de la graine est :",
      options: [
        { key: 'a', text: "L’eau" },
        { key: 'b', text: "La sécheresse" },
        { key: 'c', text: "L’action mécanique" },
        { key: 'd', text: "Le froid" }
      ],
      correct: 'a'
    },
    {
      question: "166-Pendant la germination de la graine, les différentes parties de l’embryon se développent pour donner la plantule :",
      options: [
        { key: 'a', text: "la radicule se développe en donnant la racine" },
        { key: 'b', text: "le(s) cotylédon(s) se développe en donnant la(les) feuille(s)" },
        { key: 'c', text: "la gemmule se développe en donnant la racine" },
        { key: 'd', text: "la tigelle se développe en donnant la tige" }
      ],
      correct: 'b'
    },
    {
      question: "167-La graine qui a un type de germination hypogée est :",
      options: [
        { key: 'a', text: "Le tamarin" },
        { key: 'b', text: "Le haricot" },
        { key: 'c', text: "Le maïs" },
        { key: 'd', text: "Le ricin" }
      ],
      correct: 'c'
    },
    {
      question: "168-La graine qui a un type de germination épigée est :",
      options: [
        { key: 'a', text: "Le haricot" },
        { key: 'b', text: "Le tamarin" },
        { key: 'c', text: "Le ricin" },
        { key: 'd', text: "Le riz" }
      ],
      correct: 'd'
    },
    {
      question: "169-L’arcure, greffe, repiquage, transplantation, taille, pincement :",
      options: [
        { key: 'a', text: "peuvent hâter l'apparition de floraison" },
        { key: 'b', text: "peuvent augmenter le poids de la récolte" },
        { key: 'c', text: "peuvent diminuer la durée de vie de la plante" },
        { key: 'd', text: "ne peuvent pas hâter l’apparition de la floraison" }
      ],
      correct: 'a'
    },
    {
      question: "170-Les jours longs favorisent la formation :",
      options: [
        { key: 'a', text: "des organes végétatifs" },
        { key: 'b', text: "des organes de production" },
        { key: 'c', text: "des organes de réserve" },
        { key: 'd', text: "des huiles essentielles ou essences" }
      ],
      correct: 'b'
    },
    {
      question: "171-La dissémination des grains de pollen et la pollinisation :",
      options: [
        { key: 'a', text: "la pollinisation est facile quand la fleur mâle est loin de la fleur femelle" },
        { key: 'b', text: "pour la fleur bisexuée la pollinisation est assurée par les insectes" },
        { key: 'c', text: "le plus souvent la dissémination du pollen est assurée par un facteur externe : le vent ou les animaux" },
        { key: 'd', text: "la pollinisation est facile quand le stigmate de la fleur femelle est plus haut que la fleur mâle" }
      ],
      correct: 'c'
    },
    {
      question: "172-On appelle plantes monocarpiques celles qui :",
      options: [
        { key: 'a', text: "fleurissent plusieurs fois après un nombre d'années d'existence et donnent des graines plusieurs fois" },
        { key: 'b', text: "fleurissent deux fois après un nombre d'années d'existence et donnent des graines deux fois" },
        { key: 'c', text: "ne fleurissent et ne donnent pas de fruits" },
        { key: 'd', text: "ne fleurissent qu'une seule fois après un nombre d'années d'existence, puis meurent après la formation de leurs graines" }
      ],
      correct: 'd'
    },
    {
      question: "173-Le type de semence de Composées (Asteraceae) est :",
      options: [
        { key: 'a', text: "l’akène" },
        { key: 'b', text: "la capsule" },
        { key: 'c', text: "le caryopse" },
        { key: 'd', text: "la gousse" }
      ],
      correct: 'a'
    },
    {
      question: "174-Les fruits secs déhiscents sont :",
      options: [
        { key: 'a', text: "La baie et la drupe" },
        { key: 'b', text: "Le follicule, la gousse, la silique et la capsule" },
        { key: 'c', text: "La samare et le caryopse" },
        { key: 'd', text: "L’akène et la samare" }
      ],
      correct: 'b'
    },
    {
      question: "175-La graine qui contient le plus de lipides est :",
      options: [
        { key: 'a', text: "Le maïs" },
        { key: 'b', text: "Le soja" },
        { key: 'c', text: "L’arachide" },
        { key: 'd', text: "Le riz" }
      ],
      correct: 'c'
    },
    {
      question: "176-La graine qui contient le plus de glucides est :",
      options: [
        { key: 'a', text: "Le tournesol" },
        { key: 'b', text: "Le soja" },
        { key: 'c', text: "L’arachide" },
        { key: 'd', text: "Le maïs" }
      ],
      correct: 'd'
    },
    {
      question: "177-Le facteur externe le plus important pour faire lever la dormance de la graine est :",
      options: [
        { key: 'a', text: "L’eau" },
        { key: 'b', text: "La sécheresse" },
        { key: 'c', text: "L’action mécanique" },
        { key: 'd', text: "Le froid" }
      ],
      correct: 'a'
    },
    {
      question: "178-Pendant la germination de la graine, les différentes parties de l’embryon se développent pour donner la plantule :",
      options: [
        { key: 'a', text: "la radicule se développe en donnant la racine" },
        { key: 'b', text: "le(s) cotylédon(s) se développe en donnant la(les) feuille(s)" },
        { key: 'c', text: "la gemmule se développe en donnant la racine" },
        { key: 'd', text: "la tigelle se développe en donnant la tige" }
      ],
      correct: 'b'
    },
    {
      question: "179-La graine qui a un type de germination hypogée est :",
      options: [
        { key: 'a', text: "Le tamarin" },
        { key: 'b', text: "Le haricot" },
        { key: 'c', text: "Le maïs" },
        { key: 'd', text: "Le ricin" }
      ],
      correct: 'c'
    },
    {
      question: "180-Le tissu nourricier de la graine est :",
      options: [
        { key: 'a', text: "L’embryon" },
        { key: 'b', text: "Le tégument" },
        { key: 'c', text: "Le gemmule" },
        { key: 'd', text: "L’albumen" }
      ],
      correct: 'd'
    }
  ];

  ngOnInit() {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.currentQuiz = progress.currentQuiz || 0;
      this.score = progress.score || 0;
      this.wrong = progress.wrong || 0;
    }
  }

  showResult() {
    if (!this.selectedAnswer) {
      Swal.fire({
        title: 'Attention!',
        text: 'Veuillez sélectionner une réponse avant de continuer.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.showAnswers = true;

    // ✅ check correct / wrong
    if (this.selectedAnswer === this.quizData[this.currentQuiz].correct) {
      this.score++;
    } else {
      this.wrong++;
    }

    const progress = {
      currentQuiz: this.currentQuiz,
      score: this.score,
      wrong: this.wrong
    };

    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }

  nextQuestion() {
    if (!this.selectedAnswer) {
      alert('Veuillez sélectionner une réponse avant de continuer !');
      return;
    }

    this.currentQuiz++;
    this.selectedAnswer = null;
    this.showAnswers = false;

    if (this.currentQuiz >= this.quizData.length) {
      this.finished = true;
    }

    const progress = {
      currentQuiz: this.currentQuiz,
      score: this.score,
      wrong: this.wrong
    };

    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }
}
