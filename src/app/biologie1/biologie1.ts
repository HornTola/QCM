import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare const Swal: any;

interface Question {
  question: string;
  options: { key: string; text: string }[];
  correct: string;
}

@Component({
  selector: 'app-biologie1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './biologie1.html',
  styleUrls: ['./biologie1.css']
})
export class Biologie1 implements OnInit {
  quizData: Question[] = [];
  currentQuizs = 0;
  selectedAnswers: string | null = null;
  scores = 0;
  wrongs = 0;
  answered = 0;                 // ✅ track how many questions have been counted
  finisheds = false;
  showAnswers = false;

  ngOnInit() {
    // --- your questions (unchanged) ---

    this.quizData = [
      {
        question: "1 - Quelles parties de plante sont les stomates ?",
        options: [
          { key: 'a', text: "Ce sont des orifices localisées au niveau des jeunes tiges où s’écoule la sève." },
          { key: 'b', text: "Ce sont des ouvertures percées dans la couche de l’épiderme permettant les échanges d’air et d’eau avec l’extérieur." },
          { key: 'c', text: "Ce sont des cellules de sécrétions de l’essence." },
          { key: 'd', text: "Ce sont des sacs de stockage des essences." }
        ],
        correct: "b"
      },
      {
        question: "2 - Les tissus de soutien ou tissus mécaniques (collenchyme, sclérenchyme, tissus conducteurs) :",
        options: [
          { key: 'a', text: "Assurent la rigidité de la plante" },
          { key: 'b', text: "Assurent le rôle de nutrition" },
          { key: 'c', text: "Assurent et facilitent la photosynthèse" },
          { key: 'd', text: "Assurent l’accroissement de la plante." }
        ],
        correct: "a"
      },
      {
        question: "3 - Les tissus conducteurs (xylème ou bois, phloème ou liber) :",
        options: [
          { key: 'a', text: "Xylème transporte la sève élaborée." },
          { key: 'b', text: "Xylème transporte la sève brute et phloème transporte la sève élaborée." },
          { key: 'c', text: "Phloème transporte la sève brute." },
          { key: 'd', text: "Xylème et phloème ne transportent pas les sèves." }
        ],
        correct: "b"
      },
      {
        question: "4 - Le cambium ou assise subéro-phellodermique (méristème secondaire) placé entre suber et phelloderme :",
        options: [
          { key: 'a', text: "Concerne la partie interne de la tige" },
          { key: 'b', text: "Concerne la partie centrale de la tige" },
          { key: 'c', text: "Concerne la partie moyenne de la tige" },
          { key: 'd', text: "Concerne la partie externe de la tige" }
        ],
        correct: "d"
      },
      {
        question: "5 - Le cambium ou assise libéro-ligneuse (méristème secondaire) placé entre phloème et xylème :",
        options: [
          { key: 'a', text: "Concerne la partie interne de la tige" },
          { key: 'b', text: "Concerne la partie externe de la tige" },
          { key: 'c', text: "Concerne la partie centrale de la tige" },
          { key: 'd', text: "Concerne la partie moyenne de la tige" }
        ],
        correct: "a"
      },
      {
        question: "6 - Les tissus de soutien sont :",
        options: [
          { key: 'a', text: "Le parenchyme et le collenchyme" },
          { key: 'b', text: "Le collenchyme et le sclérenchyme" },
          { key: 'c', text: "Le suber et phelloderme" },
          { key: 'd', text: "Le sclérenchyme et le parenchyme" }
        ],
        correct: "b"
      },
      {
        question: "7 - Le bois vivant est appelé aubier, quand il devient le duramen :",
        options: [
          { key: 'a', text: "Il se trouve à la partie externe de la tige" },
          { key: 'b', text: "Il se trouve à la partie externe de la racine" },
          { key: 'c', text: "Les cellules sont mortes" },
          { key: 'd', text: "Ses cellules constituent le parenchyme." }
        ],
        correct: "c"
      },
      {
        question: "8 - La partie de la racine qui protège la racine pour l’élongation ou croissance en longueur est :",
        options: [
          { key: 'a', text: "Zone lisse ou zone de croissance." },
          { key: 'b', text: "Le coiffe." },
          { key: 'c', text: "Zone pilifère ou zone de poils absorbants." },
          { key: 'd', text: "Le collet" }
        ],
        correct: "b"
      },
      {
        question: "9 - Une couche de cellules, à partir de laquelle vont se former les ramifications de la racine, est :",
        options: [
          { key: 'a', text: "Le péricycle" },
          { key: 'b', text: "L’épiderme" },
          { key: 'c', text: "L’endoderme" },
          { key: 'd', text: "Le cylindre central" }
        ],
        correct: 'a'
      },
      {
        question: "10 - La coupe transversale de la tige montre différentes parties citées de l’extérieur vers l’intérieur :",
        options: [
          { key: 'a', text: "L’épiderme, le cylindre central, le parenchyme médullaire, le parenchyme cortical et les vaisseaux conducteurs" },
          { key: 'b', text: "Les vaisseaux conducteurs, le cylindre central, le parenchyme médullaire, l’épiderme et parenchyme cortical" },
          { key: 'c', text: "L’épiderme, le parenchyme cortical, le cylindre central, le parenchyme médullaire et les vaisseaux conducteurs" },
          { key: 'd', text: "Le parenchyme cortical, l’épiderme, le cylindre central, les vaisseaux conducteurs et le parenchyme médullaire" }
        ],
        correct: 'c'
      },
      {
        question: "11 - Les faisceaux conducteurs :",
        options: [
          { key: 'a', text: "Se trouvent dans le cylindre central" },
          { key: 'b', text: "Le xylème transporte la sève élaborée" },
          { key: 'c', text: "Le phloème transporte la sève brute" },
          { key: 'd', text: "Se trouvent dans le parenchyme médullaire" }
        ],
        correct: 'd'
      },
      {
        question: "12 - La sève brute :",
        options: [
          { key: 'a', text: "Est constituée d’eau et de sels minéraux" },
          { key: 'b', text: "Est constituée d’eau et de matières organiques" },
          { key: 'c', text: "Est transportée par le phloème" },
          { key: 'd', text: "Est élaborée dans les feuilles" }
        ],
        correct: 'b'
      },
      {
        question: "13 - Les vaisseaux conducteurs dans la tige de :",
        options: [
          { key: 'a', text: "Monocotylédones, sont disposés en un seul cercle" },
          { key: 'b', text: "Dicotylédones, les vaisseaux cribrovasculaires secondaires sont disposés en amas" },
          { key: 'c', text: "Monocotylédones, les vaisseaux libéroligneux sont disposés en un seul cercle" },
          { key: 'd', text: "Dicotylédones, sont disposés en un seul cercle" }
        ],
        correct: 'd'
      },
      {
        question: "14 - La tige de Monocotylédones et de Dicotylédones :",
        options: [
          { key: 'a', text: "La tige de Dicotylédones ne contient pas de duramen au centre" },
          { key: 'b', text: "La tige de Monocotylédones présente le cambium ou assise libéro-ligneuse" },
          { key: 'c', text: "La tige de Monocotylédones est rendue rigide par les couches de sclérenchyme" },
          { key: 'd', text: "La tige de Dicotylédones n’est pas ramifiée et pas de rameaux latéraux" }
        ],
        correct: 'c'
      },
      {
        question: "15 - Le phloème assure essentiellement la circulation :",
        options: [
          { key: 'a', text: "De la sève brute des racines jusqu’aux feuilles et les autres parties de la plante" },
          { key: 'b', text: "De la sève élaborée, sève enrichie des substances issues de la photosynthèse" },
          { key: 'c', text: "De l’eau et sels minéraux de racines jusqu’aux feuilles" },
          { key: 'd', text: "De la sève élaborée constituée d’eau et sels minéraux" }
        ],
        correct: 'b'
      },
      {
        question: "16 - Le péricycle est :",
        options: [
          { key: 'a', text: "Une couche de cellules près de l’épiderme" },
          { key: 'b', text: "Une couche de cellules près du centre du cylindre central" },
          { key: 'c', text: "Une couche de cellules à partir de laquelle vont se former les ramifications de la racine" },
          { key: 'd', text: "Une couche de cellules formant les vaisseaux conducteurs" }
        ],
        correct: 'c'
      },
      {
        question: "17 - Les fonctions de la feuille sont :",
        options: [
          { key: 'a', text: "La photosynthèse, l’absorption, la respiration et stockage des éléments provenant de la photosynthèse" },
          { key: 'b', text: "La photosynthèse, la respiration, la transpiration et stockage des éléments nutritifs et de l’eau" },
          { key: 'c', text: "La respiration, l’absorption, la transpiration et la photosynthèse" },
          { key: 'd', text: "La respiration, l’absorption, l’assimilation chlorophyllienne et la transpiration" }
        ],
        correct: 'b'
      },
      {
        question: "18 - Les stomates des feuilles jouent le rôle :",
        options: [
          { key: 'a', text: "De protéger les feuilles contre la sècheresse" },
          { key: 'b', text: "D’absorption des substances minérales" },
          { key: 'c', text: "D’assurer les échanges gazeux avec l’extérieur" },
          { key: 'd', text: "De conduction de sèves" }
        ],
        correct: 'c'
      },
      {
        question: "19 - Les plastes qui ont des pigments verts sont :",
        options: [
          { key: 'a', text: "Les chloroplastes" },
          { key: 'b', text: "Les amyloplastes" },
          { key: 'c', text: "Les protéoplastes" },
          { key: 'd', text: "Les leucoplastes" }
        ],
        correct: 'a'
      },
      {
        question: "20 - Les inclusions lipidiques et les huiles essentielles :",
        options: [
          { key: 'a', text: "Sont solubles dans l’eau" },
          { key: 'b', text: "Les inclusions lipidiques ne sont pas solubles dans les solvants organiques" },
          { key: 'c', text: "Sont insolubles dans l’eau" },
          { key: 'd', text: "Les huiles essentielles sont en abondance dans les graines oléagineuses" }
        ],
        correct: 'c'
      },
      {
        question: "21 - Où se trouve le collenchyme dans une coupe transversale d’une feuille de Dicotylédones ?",
        options: [
          { key: 'a', text: "Sur l’épiderme" },
          { key: 'b', text: "Sous l’épiderme" },
          { key: 'c', text: "Dans les vaisseaux de xylème" },
          { key: 'd', text: "Dans le parenchyme" }
        ],
        correct: 'b'
      },
      {
        question: "22 - Où se trouve le liber II dans une coupe transversale d’une feuille de Dicotylédones ?",
        options: [
          { key: 'a', text: "Sous le collenchyme" },
          { key: 'b', text: "Sur le xylème II" },
          { key: 'c', text: "Sur le liber I" },
          { key: 'd', text: "Sous le xylème II" }
        ],
        correct: 'b'
      },
      {
        question: "23 - Comment est le poil tecteur dans une coupe transversale d’une feuille de Dicotylédones ?",
        options: [
          { key: 'a', text: "Unicellulaire" },
          { key: 'b', text: "Courbé et ondulé" },
          { key: 'c', text: "Pluricellulaire et droit" },
          { key: 'd', text: "Non granuleux" }
        ],
        correct: 'c'
      },
      {
        question: "24 - Comment est l’épiderme dans une coupe transversale de la racine ?",
        options: [
          { key: 'a', text: "Avec le suber n’est pas régulier" },
          { key: 'b', text: "Est régulier" },
          { key: 'c', text: "Porte des poils tecteurs" },
          { key: 'd', text: "Ne porte pas de poils absorbants" }
        ],
        correct: 'a'
      },
      {
        question: "25 - Comment sont disposés les vaisseaux libéro-ligneux dans une coupe transversale d’une racine de Monocotylédones ?",
        options: [
          { key: 'a', text: "Sont disposés en un seul cercle" },
          { key: 'b', text: "Libers sont disposés dessus les bois" },
          { key: 'c', text: "Bois I et libers I disposés intercalés" },
          { key: 'd', text: "Bois et liber sont disposés en plusieurs cercles" }
        ],
        correct: 'c'
      },
      {
        question: "26 - Comment est le parenchyme médulaire dans une coupe transversale d’une racine de Monocotylédones ?",
        options: [
          { key: 'a', text: "Composé de cellules vivantes" },
          { key: 'b', text: "Composé de cellules mortes" },
          { key: 'c', text: "Contient le suber : parenchyme subérisé" },
          { key: 'd', text: "Est grande" }
        ],
        correct: 'c'
      },
      {
        question: "32 - Collenchyme est composé de :",
        options: [
          { key: 'a', text: "Cellules mortes" },
          { key: 'b', text: "Cellules vivantes à membrane épaissie par cellulose" },
          { key: 'c', text: "Cellules à membrane épaissie par lignine" },
          { key: 'd', text: "Cellules riches en chloroplastes" }
        ],
        correct: 'b'
      },
      {
        question: "33 - Sclérenchyme est composé de :",
        options: [
          { key: 'a', text: "Cellules vivantes du vaisseaux conducteurs" },
          { key: 'b', text: "Cellules contenant de la cellulose" },
          { key: 'c', text: "Cellules mortes à membrane épaissie par lignine" },
          { key: 'd', text: "Cellules du parenchyme subérisé" }
        ],
        correct: 'c'
      },
      {
        question: "34 - Le péricycle :",
        options: [
          { key: 'a', text: "Se trouve dans le cylindre périphérique" },
          { key: 'b', text: "Donne naissance à des racines secondaires" },
          { key: 'c', text: "Se trouve dans le parenchyme médulaire" },
          { key: 'd', text: "Existe dans la coupe transversale de la tige" }
        ],
        correct: 'b'
      },
      {
        question: "35 - Le péricycle :",
        options: [
          { key: 'a', text: "Se trouve à l’intérieur du mésoderme" },
          { key: 'b', text: "Donne naissance à des poils absorbants" },
          { key: 'c', text: "Se trouve dans le parenchyme cortical" },
          { key: 'd', text: "Se trouve aussi dans la coupe transversale de la tige" }
        ],
        correct: 'a'
      },
      {
        question: "36 - Les poils absorbants :",
        options: [
          { key: 'a', text: "Se trouvent dans la région lisse de la racine" },
          { key: 'b', text: "Se trouvent dans la zone pilifère" },
          { key: 'c', text: "Existent aussi sur les jeunes tiges" },
          { key: 'd', text: "Sont multicellulaires" }
        ],
        correct: 'b'
      },
      {
        question: "37 - Dans une coupe transversale de la tige de Monocotylédones :",
        options: [
          { key: 'a', text: "Les vaisseaux libéro-ligneux sont disposés en plusieurs cercles" },
          { key: 'b', text: "Les vaisseaux conducteurs sont secondaires" },
          { key: 'c', text: "Les vaisseaux libéro-ligneux sont disposés en un seul cercle" },
          { key: 'd', text: "Les vaisseaux conducteurs se trouvent dans le parenchyme cortical" }
        ],
        correct: 'a'
      },
      {
        question: "38 - Dans une coupe transversale de la tige de Dicotylédones :",
        options: [
          { key: 'a', text: "Les vaisseaux conducteurs se trouvent dans le parenchyme cortical" },
          { key: 'b', text: "Les vaisseaux libéro-ligneux sont disposés en plusieurs cercles" },
          { key: 'c', text: "Les vaisseaux libéro-ligneux sont disposés en un seul cercle" },
          { key: 'd', text: "Les vaisseaux conducteurs sont primaires" }
        ],
        correct: 'c'
      },
      {
        question: "39 - Le collenchyme :",
        options: [
          { key: 'a', text: "A pour rôle de réserve de l’amidon" },
          { key: 'b', text: "Existe dans les coupes de tige" },
          { key: 'c', text: "Est une sorte de méristème" },
          { key: 'd', text: "Existe dans les coupes de feuilles" }
        ],
        correct: 'd'
      },
      {
        question: "40 - Le sclérenchyme :",
        options: [
          { key: 'a', text: "Est un tissu de revêtement" },
          { key: 'b', text: "Est un tissu de soutien" },
          { key: 'c', text: "Est un tissu de réserve" },
          { key: 'd', text: "Est un tissu conducteur" }
        ],
        correct: 'b'
      },
      {
        question: "41 - Le xylème ou bois :",
        options: [
          { key: 'a', text: "Est primaire chez les parties âgées de Dicotylédones" },
          { key: 'b', text: "Est secondaire chez les Monocotylédones" },
          { key: 'c', text: "Est primaire chez les jeunes parties de Dicotylédones" },
          { key: 'd', text: "Est secondaire chez les parties âgées de Monocotylédones" }
        ],
        correct: 'c'
      },
      {
        question: "42 - La double coloration (avec vert d’iode et rouge congo) :",
        options: [
          { key: 'a', text: "Colore en rose les tissus morts" },
          { key: 'b', text: "Colore en rose les tissus vivants" },
          { key: 'c', text: "Colore en vert les tissus vivants" },
          { key: 'd', text: "Colore en rose l’épiderme" }
        ],
        correct: 'b'
      },
      {
        question: "43 - La double coloration a pour but de :",
        options: [
          { key: 'a', text: "Bien différencier les tissus des parties de plantes" },
          { key: 'b', text: "Colorer en vert les tissus vivants" },
          { key: 'c', text: "Colorer en rose les tissus morts" },
          { key: 'd', text: "Évaluer l’âge des parties de plante" }
        ],
        correct: 'a'
      },
      {
        question: "44 - La double coloration utilise l’hypochlorite ou eau de Javel a pour but de :",
        options: [
          { key: 'a', text: "Faire dissoudre les substances minérales" },
          { key: 'b', text: "Faire colorer les lipides" },
          { key: 'c', text: "Faire dissoudre toutes les substances organiques" },
          { key: 'd', text: "Colorer les cellules vivantes et mortes" }
        ],
        correct: 'c'
      },
      {
        question: "45 - La plante possédant une action antipyrétique ou fébrifuge est :",
        options: [
          { key: 'a', text: "Costus speciosus" },
          { key: 'b', text: "Abutilon indicum" },
          { key: 'c', text: "Morinda citrifolia" },
          { key: 'd', text: "Phyllanthus urinaria" }
        ],
        correct: 'd'
      }
    ];

    // Load saved progress
    const saved = localStorage.getItem('quiz-progress');
    if (saved) {
      const data = JSON.parse(saved);
      this.currentQuizs = data.currentQuizs ?? 0;
      this.scores = data.scores ?? 0;
      this.wrongs = data.wrongs ?? 0;
      this.answered = data.answered ?? (this.scores + this.wrongs);
      this.finisheds = data.finisheds ?? false;
      this.selectedAnswers = data.selectedAnswers ?? null;
    }
  }

  private saveProgress() {
    localStorage.setItem('quiz-progress', JSON.stringify({
      currentQuizs: this.currentQuizs,
      scores: this.scores,
      wrongs: this.wrongs,
      answered: this.answered,
      finisheds: this.finisheds,
      selectedAnswers: this.selectedAnswers
    }));
  }

  showResult() {
    // Don’t count twice for the same question
    if (this.showAnswers) return;

    if (!this.selectedAnswers) {
      Swal.fire({
        title: 'Attention!',
        text: 'Veuillez sélectionner une réponse avant de continuer !',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    this.answered++; // ✅ one more question evaluated

    if (this.selectedAnswers === this.quizData[this.currentQuizs].correct) {
      this.scores++;  // ✅ Correct
    } else {
      this.wrongs++;  // ❌ Wrong
    }

    this.showAnswers = true;
    this.saveProgress();
  }


  nextQuestion() {
    // If user skips "Voir la réponse", still count this question once
    if (!this.showAnswers) {
      this.showResult();            // will count and set showAnswers = true
      if (!this.showAnswers) return; // early exit if user still hasn't selected anything
    }

    // Move on
    this.showAnswers = false;
    this.selectedAnswers = null;
    this.currentQuizs++;

    if (this.currentQuizs >= this.quizData.length) {
      this.finisheds = true;
    }

    this.saveProgress();
  }

  restartQuiz() {
    this.currentQuizs = 0;
    this.scores = 0;
    this.wrongs = 0;
    this.answered = 0;
    this.selectedAnswers = null;
    this.finisheds = false;
    this.showAnswers = false;
    localStorage.removeItem('quiz-progress');
  }
}
