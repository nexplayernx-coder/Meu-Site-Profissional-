
let planoSelecionado='';
function openForm(plano){planoSelecionado=plano;document.getElementById('modalForm').classList.add('open');document.getElementById('planoNome').innerText=plano;}
function closeForm(){document.getElementById('modalForm').classList.remove('open');}
function validate(){const nome=document.getElementById('fNome').value.trim();const email=document.getElementById('fEmail').value.trim();const disp=document.getElementById('fDisp').value;const custom=document.getElementById('fCustom').value.trim();let valid=true;
if(nome.length<3){document.getElementById('eNome').style.display='block';valid=false}else document.getElementById('eNome').style.display='none';
if(!/^[^@]+@[^@]+\.[^@]+$/.test(email)){document.getElementById('eEmail').style.display='block';valid=false}else document.getElementById('eEmail').style.display='none';
if(!disp){document.getElementById('eDisp').style.display='block';valid=false}else document.getElementById('eDisp').style.display='none';
if(disp==='outro-custom' && custom.length<2){document.getElementById('eCustom').style.display='block';valid=false}else document.getElementById('eCustom').style.display='none';
return valid;
}
document.getElementById('fDisp')?.addEventListener('change',e=>{document.getElementById('customWrap').style.display=e.target.value==='outro-custom'?'block':'none'});
['fNome','fEmail','fDisp','fCustom'].forEach(id=>{document.getElementById(id)?.addEventListener('input',()=>{const ok=validate();document.getElementById('btnZap').disabled=!ok;document.getElementById('btnZap').style.opacity=ok?'1':'0.4';});});
function sendZap(){
 if(!validate())return;
 const nome=document.getElementById('fNome').value; const email=document.getElementById('fEmail').value;
 let disp=document.getElementById('fDisp').value; if(disp==='outro-custom') disp=document.getElementById('fCustom').value;
 const teste=document.getElementById('fTeste').checked?'Sim':'Não';
 const msg=`Olá! Tenho interesse na NEX PLAYER.%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Email:* ${encodeURIComponent(email)}%0A*Dispositivo:* ${encodeURIComponent(disp)}%0A*Deseja teste:* ${teste}%0A*Plano:* ${encodeURIComponent(planoSelecionado)}%0A%0AGostaria de receber mais informações sobre o plano.`;
 window.open(`https://wa.me/5535991148346?text=${msg}`,'_blank'); closeForm();
}
