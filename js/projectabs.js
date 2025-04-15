


function abrirVS (){// 2

  document.getElementById('projecSection1').classList.add('active');
  document.getElementById('projecSection2').classList.remove('active');
  document.getElementById('projecSection2').style='display:none';

  document.getElementById('pjtAncor1').classList.add('active');
  document.getElementById('pjtAncor2').classList.remove('active');
};

function abrirVG() { //1

    document.getElementById('projecSection1').classList.remove('active');
    document.getElementById('projecSection2').classList.add('active');
  
    document.getElementById('pjtAncor1').classList.remove('active');
    document.getElementById('pjtAncor2').classList.add('active');
}