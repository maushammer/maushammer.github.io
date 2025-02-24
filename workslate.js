"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function fetchBuffer(p){
	var b=null;
	if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());
	else if(typeof require==='function'){
		p=require('path').join(__dirname, p);
		b=new Promise((y,n)=>{
			require('fs').readFile(p,(e,d)=>{
				if(e)n(e);
				else y(d);
			});
		});
	}else b=new Promise((y,n)=>{
		y(read(p,'binary'));
	});
	return b;
}
function __ZN8Graphics18draw_cursor_alwaysEv(){
	var tmp0=0,tmp1=0,tmp2=0;
	tmp0=HEAP32[301778]|0;
	tmp1=HEAP32[280356]|0;
	tmp2=HEAP32[280357]|0;
	if((HEAP32[297681]|0)!==0)if((tmp0|0)!==0){
		__ZN8Graphics8drawCharEiic(tmp1,tmp2,160);
		return;
	}
	__ZN8Graphics8drawCharEiic(tmp1,tmp2,HEAP8[(tmp1<<4)+tmp2+1121432>>0]|0);
}
function __ZN8Graphics8drawCharEiic(Larg0,Larg1,Larg2){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,tmp7=null,tmp8=null,tmp9=-0.,tmp10=0,tmp11=0;
	__ZN8Graphics9canvasCtxE.setTransform(3.1666666666666665,0,0,3.2890625,72,113.2890625);
	tmp7=__ZN8Graphics9canvasCtxE;
	tmp0=1115840|0;
	tmp1=1117945|0;
	tmp8=_cheerpCreate_ZN6client6StringC2EPKc((Larg2<<24>-16777216?HEAP8:HEAP8),Larg2<<24>-16777216?tmp0>>0:tmp1>>0);
	tmp7.fillStyle=tmp8;
	tmp2=Larg1<<3;
	tmp9=Larg2<<24>-16777216?0:.1;
	tmp3=__imul(Larg0,6)|0;
	__ZN8Graphics9canvasCtxE.fillRect((+(tmp3|0)),tmp9+(+(tmp2|0)),6,8-tmp9*2);
	tmp4=((Larg2<<24>-16777216?1:0)^1?1:0)<<31>>31;
	tmp5=__imul(Larg2&127,6)|0;
	tmp10=0;
	a:while(1){
		tmp11=HEAP8[tmp10+tmp5+1115044>>0]|0;
		tmp9=(+(tmp10+tmp3|0));
		tmp6=tmp11^tmp4;
		tmp11=0;
		while(1){
			tmp8=__ZN8Graphics9canvasCtxE;
			tmp7=_cheerpCreate_ZN6client6StringC2EPKc(((tmp6&1)!==0?HEAP8:HEAP8),(tmp6&1)!==0?tmp1>>0:tmp0>>0);
			tmp8.fillStyle=tmp7;
			__ZN8Graphics9canvasCtxE.fillRect(tmp9,(+(tmp11+tmp2|0)),.9,.9);
			tmp11=tmp11+1|0;
			if((tmp11|0)===8){
				tmp10=tmp10+1|0;
				if((tmp10|0)!==6)continue a;
				return;
			}
			tmp6>>>=1;
			continue;
		}
		break;
	}
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var tmp0=null,Lgeptoindexphi=0,tmp2=null;
	tmp0=String();
	if((Larg0[Marg0]&255)===0)return String(tmp0);
	Lgeptoindexphi=0;
	while(1){
		tmp2=String.fromCharCode(Larg0[Marg0+Lgeptoindexphi|0]<<24>>24);
		tmp0=tmp0.concat(tmp2);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
		break;
	}
	return String(tmp0);
}
function __ZN8Graphics16initializeCanvasEv(){
	var tmp0=null,tmp1=0,tmp2=null,tmp3=null,tmp4=0;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1115036>>0);
	tmp0=document.getElementById(tmp2);
	__ZN8Graphics12canvas_widthE=~~ +tmp0.width;
	__ZN8Graphics13canvas_heightE=~~ +tmp0.height;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1082248>>0);
	__ZN8Graphics6canvasE=document.getElementById(tmp2);
	__ZN8Graphics6canvasE.width=(+(__ZN8Graphics12canvas_widthE|0));
	__ZN8Graphics6canvasE.height=(+(__ZN8Graphics13canvas_heightE|0));
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1049464>>0);
	tmp3=document.getElementById(tmp2);
	tmp3.appendChild(__ZN8Graphics6canvasE);
	tmp2=__ZN8Graphics6canvasE;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1116680>>0);
	__ZN8Graphics9canvasCtxE=tmp2.getContext(tmp3);
	__ZN8Graphics9canvasCtxE.drawImage(tmp0,0,0);
	tmp2=__ZN8Graphics9canvasCtxE;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1115840>>0);
	tmp2.fillStyle=tmp3;
	__ZN8Graphics9canvasCtxE.fillRect(72,111,874,421);
	tmp4=0;
	while(1){
		tmp1=tmp4<<4;
		HEAP8[tmp1+1121432>>0]=32;
		HEAP8[tmp1+1+1121432>>0]=32;
		HEAP8[tmp1+2+1121432>>0]=32;
		HEAP8[tmp1+3+1121432>>0]=32;
		HEAP8[tmp1+4+1121432>>0]=32;
		HEAP8[tmp1+5+1121432>>0]=32;
		HEAP8[tmp1+6+1121432>>0]=32;
		HEAP8[tmp1+7+1121432>>0]=32;
		HEAP8[tmp1+8+1121432>>0]=32;
		HEAP8[tmp1+9+1121432>>0]=32;
		HEAP8[tmp1+10+1121432>>0]=32;
		HEAP8[tmp1+11+1121432>>0]=32;
		HEAP8[tmp1+12+1121432>>0]=32;
		HEAP8[tmp1+13+1121432>>0]=32;
		HEAP8[tmp1+14+1121432>>0]=32;
		HEAP8[tmp1+15+1121432>>0]=32;
		tmp4=tmp4+1|0;
		if((tmp4|0)!==46)continue;
		break;
	}
}
function __ZN8Graphics14init_callbacksEv(){
	var tmp0=null,tmp1=null;
	tmp0=__ZN8Graphics9sim_frameEv;
	+requestAnimationFrame(tmp0);
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1115812>>0);
	tmp1=__ZN8Graphics14keyDownHandlerEPN6client13KeyboardEventE;
	document.addEventListener(tmp0,tmp1);
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1115820>>0);
	tmp1=__ZN8Graphics12keyUpHandlerEPN6client13KeyboardEventE;
	document.addEventListener(tmp0,tmp1);
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1115828>>0);
	tmp1=__ZN8Graphics15keyPressHandlerEPN6client13KeyboardEventE;
	document.addEventListener(tmp0,tmp1);
}
function __ZN8Graphics9sim_frameEv(){
	var tmp0=-0.,tmp1=-0.,tmp2=0,tmp3=null,Lconv10=0,Lconv=0,tmp6=0,tmp7=0;
	tmp3=new Date();
	tmp0=+tmp3.getTime();
	tmp1=tmp0<0?-tmp0:tmp0;
	Lconv10=~~(tmp1%4294967296);
	Lconv=~~(tmp1*2.3283064365386963E-10);
	Lconv=tmp0<0?((Lconv10|0)!==0?Lconv^ -1|0:-Lconv|0)|0:Lconv|0;
	Lconv10=tmp0<0?-Lconv10|0:Lconv10|0;
	tmp6=__ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p0|0;
	tmp7=(Lconv-(__ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p1|0)|0)!==((Lconv10>>>0<tmp6>>>0?1:0)|0)?1:0;
	a:{
		if(Lconv10-tmp6>>>0<=500)if(!(tmp7))break a;
		__ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p0=Lconv10;
		__ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p1=Lconv;
		tmp6=HEAP32[301778]|0;
		HEAP32[301778]=(tmp6|0)===0?1:0;
		if((HEAP32[297681]|0)!==0){
			tmp7=HEAP32[280356]|0;
			tmp2=HEAP32[280357]|0;
			if((tmp6|0)===0){
				tmp6=160;
			}else{
				tmp6=HEAP8[(tmp7<<4)+tmp2+1121432>>0]|0;
			}
			__ZN8Graphics8drawCharEiic(tmp7,tmp2,tmp6);
		}
	}
	Lconv=___udivti3(Lconv10,Lconv)|0;
	Lconv10=HEAP32[280542]|0;
	if(((__ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p0|0)^Lconv|(__ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p1|0)^Lconv10|0)!==0){
		__Z10rtc_updateP8timespec();
		__ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p0=Lconv;
		__ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p1=Lconv10;
	}
	__Z3simj();
	tmp3=__ZN8Graphics9sim_frameEv;
	+requestAnimationFrame(tmp3);
}
function __ZN8Graphics14keyDownHandlerEPN6client13KeyboardEventE(Larg0){
	var tmp0=0;
	a:if(((getKeyboardActive())|0)!==0){
		b:{
			switch(~~ +Larg0.keyCode|0){
				case 38:
				tmp0=4128;
				break;
				case 40:
				tmp0=32800;
				break;
				case 39:
				tmp0=8224;
				break;
				case 37:
				tmp0=16416;
				break;
				case 112:
				tmp0=1032;
				break;
				case 113:
				tmp0=2056;
				break;
				case 114:
				tmp0=4104;
				break;
				case 115:
				tmp0=16392;
				break;
				case 116:
				tmp0=8200;
				break;
				case 117:
				tmp0=32776;
				break;
				case 118:
				tmp0=288;
				break;
				case 20:
				Larg0.preventDefault();
				__Z13push_kbd_fifoj(131072);
				__Z13push_kbd_fifoj(196608);
				break b;
				default:
				break a;
			}
			__Z13push_kbd_fifoj(tmp0);
			Larg0.preventDefault();
		}
		__Z13push_kbd_fifoj(0);
	}
}
function __ZN8Graphics12keyUpHandlerEPN6client13KeyboardEventE(Larg0){
	if(((getKeyboardActive())|0)!==0)if((~~ +Larg0.keyCode|0)===20){
		Larg0.preventDefault();
		__Z13push_kbd_fifoj(131072);
		__Z13push_kbd_fifoj(196608);
		__Z13push_kbd_fifoj(0);
	}
}
function __ZN8Graphics15keyPressHandlerEPN6client13KeyboardEventE(Larg0){
	var tmp0=0,tmp1=0,tmp2=0;
	a:if(((getKeyboardActive())|0)!==0){
		tmp0=~~ +Larg0.keyCode;
		switch((tmp0-65>>>0<26?tmp0+32|0:tmp0|0)|0){
			case 97:
			tmp2=272;
			tmp1=1;
			break;
			case 98:
			tmp2=4224;
			tmp1=1;
			break;
			case 7:
			tmp2=4224;
			tmp1=0;
			break;
			case 99:
			tmp2=1152;
			tmp1=1;
			break;
			case 3:
			tmp2=1152;
			tmp1=0;
			break;
			case 100:
			tmp2=1040;
			tmp1=1;
			break;
			case 101:
			tmp2=1025;
			tmp1=1;
			break;
			case 35:
			tmp2=1025;
			tmp1=0;
			break;
			case 102:
			tmp2=2064;
			tmp1=1;
			break;
			case 92:
			tmp2=2064;
			tmp1=0;
			break;
			case 103:
			tmp2=4112;
			tmp1=1;
			break;
			case 94:
			tmp2=4112;
			tmp1=0;
			break;
			case 104:
			tmp2=8208;
			tmp1=1;
			break;
			case 95:
			tmp2=8208;
			tmp1=0;
			break;
			case 105:
			tmp2=32769;
			tmp1=1;
			break;
			case 106:
			tmp2=16400;
			tmp1=1;
			break;
			case 124:
			tmp2=16400;
			tmp1=0;
			break;
			case 107:
			tmp2=32784;
			tmp1=1;
			break;
			case 126:
			tmp2=32784;
			tmp1=0;
			break;
			case 108:
			tmp2=32772;
			tmp1=1;
			break;
			case 109:
			tmp2=16512;
			tmp1=1;
			break;
			case 23:
			tmp2=16512;
			tmp1=0;
			break;
			case 110:
			tmp2=8320;
			tmp1=1;
			break;
			case 18:
			tmp2=8320;
			tmp1=0;
			break;
			case 111:
			tmp2=32770;
			tmp1=1;
			break;
			case 63:
			tmp2=32770;
			tmp1=0;
			break;
			case 112:
			tmp2=16386;
			tmp1=1;
			break;
			case 4:
			tmp2=16386;
			tmp1=0;
			break;
			case 113:
			tmp2=257;
			tmp1=1;
			break;
			case 33:
			tmp2=257;
			tmp1=0;
			break;
			case 114:
			tmp2=2049;
			tmp1=1;
			break;
			case 38:
			tmp2=2049;
			tmp1=0;
			break;
			case 115:
			tmp2=528;
			tmp1=1;
			break;
			case 96:
			tmp2=528;
			tmp1=0;
			break;
			case 116:
			tmp2=4097;
			tmp1=1;
			break;
			case 1:
			tmp2=4097;
			tmp1=0;
			break;
			case 117:
			tmp2=16385;
			tmp1=1;
			break;
			case 34:
			tmp2=16385;
			tmp1=0;
			break;
			case 118:
			tmp2=2176;
			tmp1=1;
			break;
			case 19:
			tmp2=2176;
			tmp1=0;
			break;
			case 119:
			tmp2=513;
			tmp1=1;
			break;
			case 64:
			tmp2=513;
			tmp1=0;
			break;
			case 120:
			tmp2=640;
			tmp1=1;
			break;
			case 16:
			tmp2=640;
			tmp1=0;
			break;
			case 121:
			tmp2=8193;
			tmp1=1;
			break;
			case 39:
			tmp2=8193;
			tmp1=0;
			break;
			case 122:
			tmp2=384;
			tmp1=1;
			break;
			case 6:
			tmp2=384;
			tmp1=0;
			break;
			case 48:
			tmp2=32832;
			tmp1=1;
			break;
			case 60:
			tmp2=32832;
			tmp1=0;
			break;
			case 49:
			tmp2=320;
			tmp1=1;
			break;
			case 91:
			tmp2=320;
			tmp1=0;
			break;
			case 50:
			tmp2=576;
			tmp1=1;
			break;
			case 93:
			tmp2=576;
			tmp1=0;
			break;
			case 51:
			tmp2=1088;
			tmp1=1;
			break;
			case 14:
			tmp2=1088;
			tmp1=0;
			break;
			case 52:
			tmp2=4100;
			tmp1=1;
			break;
			case 40:
			tmp2=4100;
			tmp1=0;
			break;
			case 53:
			tmp2=2052;
			tmp1=1;
			break;
			case 41:
			tmp2=2052;
			tmp1=0;
			break;
			case 54:
			tmp2=1028;
			tmp1=1;
			break;
			case 37:
			tmp2=1028;
			tmp1=0;
			break;
			case 55:
			tmp2=4098;
			tmp1=1;
			break;
			case 123:
			tmp2=4098;
			tmp1=0;
			break;
			case 56:
			tmp2=258;
			tmp1=1;
			break;
			case 125:
			tmp2=258;
			tmp1=0;
			break;
			case 57:
			tmp2=514;
			tmp1=1;
			break;
			case 36:
			tmp2=514;
			tmp1=0;
			break;
			case 44:
			tmp2=32896;
			tmp1=1;
			break;
			case 59:
			tmp2=32896;
			tmp1=0;
			break;
			case 46:
			tmp2=16448;
			tmp1=1;
			break;
			case 62:
			tmp2=16448;
			tmp1=0;
			break;
			case 58:
			tmp2=8196;
			tmp1=0;
			break;
			case 61:
			tmp2=8256;
			tmp1=1;
			break;
			case 43:
			tmp2=4160;
			tmp1=1;
			break;
			case 45:
			tmp2=2112;
			tmp1=1;
			break;
			case 47:
			tmp2=2050;
			tmp1=1;
			break;
			case 42:
			tmp2=1026;
			tmp1=1;
			break;
			case 32:
			tmp2=1056;
			tmp1=1;
			break;
			case 13:
			tmp2=2080;
			tmp1=1;
			break;
			case 8:
			tmp2=8194;
			tmp1=1;
			break;
			case 27:
			tmp2=520;
			tmp1=1;
			break;
			default:
			break a;
		}
		Larg0.preventDefault();
		if(tmp0-65>>>0<26){
			__Z13push_kbd_fifoj(65536);
			tmp2|=65536;
		}
		if(!(tmp1)){
			__Z13push_kbd_fifoj(131072);
			tmp2|=131072;
		}
		__Z13push_kbd_fifoj(tmp2);
		__Z13push_kbd_fifoj(0);
	}
}
function __ZL17do_syscall_writevPK5iovecl(Lios,Llen){
	var tmp0=null,tmp0o=0,Lmask$p1$pi=0,Lbuilder$psroa$p0$p047=null,L__ret$p049=0,Li$p048=0,Lios$poptgep=0,Li15$p054=0,L$psink$pi=0,Lconv$pi=0,Lcall$pi=null;
	if(!(__ZGVZL17do_syscall_writevPK5ioveclE4curr|0)){
		__ZZL17do_syscall_writevPK5ioveclE4curr=String();
		__ZGVZL17do_syscall_writevPK5ioveclE4curr=1;
	}
	Lbuilder$psroa$p0$p047=__ZZL17do_syscall_writevPK5ioveclE4curr;
	if((Llen|0)>0){
		Li$p048=0;
		L__ret$p049=0;
		while(1){
			Lios$poptgep=(Li$p048<<3)+Lios|0;
			Li15$p054=HEAP32[4+Lios$poptgep>>2]|0;
			if((Li15$p054|0)!==0){
				L__ret$p049=Li15$p054+L__ret$p049|0;
				tmp0o=HEAP32[Lios$poptgep>>2];
				tmp0=HEAP8;
				if((Li15$p054|0)>0){
					Lios$poptgep=0;
					while(1){
						L$psink$pi=tmp0[tmp0o+Lios$poptgep|0]|0;
						Lconv$pi=L$psink$pi&255;
						a:if((L$psink$pi&255)<192){
							L$psink$pi=__ZZL17do_syscall_writevPK5ioveclE9remaining|0;
							if((L$psink$pi|0)!==0){
								__ZZL17do_syscall_writevPK5ioveclE9codepoint=(__ZZL17do_syscall_writevPK5ioveclE9codepoint<<6)+(Lconv$pi&63)|0;
								Lconv$pi=L$psink$pi-1|0;
								__ZZL17do_syscall_writevPK5ioveclE9remaining=Lconv$pi;
								if((Lconv$pi|0)!==0)break a;
							}else __ZZL17do_syscall_writevPK5ioveclE9codepoint=Lconv$pi;
							Lconv$pi=__ZZL17do_syscall_writevPK5ioveclE9codepoint|0;
							if(Lconv$pi>>>0<65536){
								if((Lconv$pi|0)!==0){
									Lcall$pi=String.fromCharCode(Lconv$pi);
									Lbuilder$psroa$p0$p047=Lbuilder$psroa$p0$p047.concat(Lcall$pi);
								}
							}else{
								Lcall$pi=String.fromCharCode((Lconv$pi-65536>>>10)+55296|0);
								Lbuilder$psroa$p0$p047=Lbuilder$psroa$p0$p047.concat(Lcall$pi);
								Lcall$pi=String.fromCharCode((Lconv$pi&1023)+56320|0);
								Lbuilder$psroa$p0$p047=Lbuilder$psroa$p0$p047.concat(Lcall$pi);
							}
						}else{
							if((L$psink$pi&255)<224){
								Lmask$p1$pi=31;
								L$psink$pi=1;
							}else{
								Lmask$p1$pi=(L$psink$pi&255)<240?15|0:7|0;
								L$psink$pi=(L$psink$pi&255)<240?2|0:3|0;
							}
							__ZZL17do_syscall_writevPK5ioveclE9remaining=L$psink$pi;
							__ZZL17do_syscall_writevPK5ioveclE9codepoint=Lmask$p1$pi&Lconv$pi;
						}
						Lios$poptgep=Lios$poptgep+1|0;
						if((Lios$poptgep|0)!==(Li15$p054|0))continue;
						break;
					}
				}
			}
			Li$p048=Li$p048+1|0;
			if((Li$p048|0)!==(Llen|0))continue;
			break;
		}
	}else{
		L__ret$p049=0;
	}
	Lcall$pi=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,1117632>>0);
	Lbuilder$psroa$p0$p047=Lbuilder$psroa$p0$p047.split(Lcall$pi);
	Li$p048=Lbuilder$psroa$p0$p047.length;
	if((Li$p048|0)>1){
		Li15$p054=0;
		Lios$poptgep=1;
		while(1){
			Lcall$pi=Lbuilder$psroa$p0$p047[0+Li15$p054|0];
			console.log(Lcall$pi);
			Li15$p054=Lios$poptgep+1|0;
			if((Li15$p054|0)!==(Li$p048|0)){
				Lmask$p1$pi=Li15$p054;
				Li15$p054=Lios$poptgep;
				Lios$poptgep=Lmask$p1$pi;
				continue;
			}
			break;
		}
	}
	__ZZL17do_syscall_writevPK5ioveclE4curr=Lbuilder$psroa$p0$p047[0+(Li$p048-1|0)|0];
	return L__ret$p049|0;
}
function __start(){
	__Z7webMainv();
}
var __ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p0=0;
var __ZZN8Graphics22blink_cursor_if_neededEyE17prev_milliseconds$p1=0;
var __ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p0=0;
var __ZZN8Graphics21advance_rtc_if_neededEyE12prev_seconds$p1=0;
var __ZGVZL17do_syscall_writevPK5ioveclE4curr=0;
var __ZZL17do_syscall_writevPK5ioveclE4curr=null;
var __ZZL17do_syscall_writevPK5ioveclE9remaining=0;
var __ZZL17do_syscall_writevPK5ioveclE9codepoint=0;
var __ZN8Graphics9canvasCtxE;
var __ZN8Graphics12canvas_widthE;
var __ZN8Graphics13canvas_heightE;
var __ZN8Graphics6canvasE;
var HEAP8=null,HEAP32=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var __Z7webMainv=null;
var __Z13push_kbd_fifoj=null;
var ___udivti3=null;
var __Z10rtc_updateP8timespec=null;
var __Z3simj=null;
__dummy.promise=
fetchBuffer('workslate.wasm').then(Lf=>
WebAssembly.instantiate(Lf,
{i:{
		__ZN8Graphics16initializeCanvasEv:__ZN8Graphics16initializeCanvasEv,
		__ZN8Graphics14init_callbacksEv:__ZN8Graphics14init_callbacksEv,
		__ZL17do_syscall_writevPK5iovecl:__ZL17do_syscall_writevPK5iovecl,
		__ZN8Graphics18draw_cursor_alwaysEv:__ZN8Graphics18draw_cursor_alwaysEv,
		__ZN8Graphics8drawCharEiic:__ZN8Graphics8drawCharEiic,
		___syscall_exit_group:__dummy,
		___syscall_exit:__dummy,
		___syscall__llseek:__dummy,
		___syscall_read:__dummy,
		___syscall_readv:__dummy,
	}})
).then(Lf=>{
	__asm=Lf.instance.exports;
	__heap=__asm.memory.buffer;
	assignHeaps(__heap);
	__Z7webMainv=__asm.__Z7webMainv;
	__Z13push_kbd_fifoj=__asm.__Z13push_kbd_fifoj;
	___udivti3=__asm.___udivti3;
	__Z10rtc_updateP8timespec=__asm.__Z10rtc_updateP8timespec;
	__Z3simj=__asm.__Z3simj;
	__start();
});
function assignHeaps(Lf){
	HEAP8=new Uint8Array(Lf);
	HEAP32=new Int32Array(Lf);
}
//# sourceMappingURL=workslate.js.map