let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

function isRecorrente() {
 if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
   return 'Ambos recorrentes'
 } else {
   return ''
 }
}

console.log(`${info.personagem} e ${info2.personagem}\n${info.origem} e ${info2.origem}\n${info.nota} e ${info2.nota}\n${isRecorrente()}`);