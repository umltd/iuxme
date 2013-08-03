/**
 * Author : Mayank Agarwal
 * Released under the GNU's GPL v3 
 *
 */



/*
 * Global Variable Declarations
 *
 * These variables maintain the current state of the animation.
 * If resize is called - All animations are reset.
 */
var rdFlag = 0;
var rdx1, rdx2, rdy1, rdy2;
var isAnimated;
var positionPath;
var i1Path;
var i1Start;
var i1Ctr;
var i1Flag;
var i2Path;
var i2Start;
var u1Start;
var u1Path;
var uCtr;
var uFlag;
var u2Path;
var u2Start;
var x1Start;
var x1Path;
var x2Path;
var x2Start;
var x2Ctr;
var x2Flag;
var dotStart;
var dotPath;
var dotFlag;
var dotCtr;
var mStart;
var mPath;
var eStart;
var ePath;

function drawScreen() {
	//Draw the back button:
	var backText;
	if (rdFlag === 0) {
		backText = new PointText(new Point(6, 542));
	}
	else {
		backText = new PointText(new Point(800, 25));
	}
	backText.content = 'Back';
	backText.visible = true;
	backText.fillColor = 'black';
	backText.characterStyle = {
		font: 'TangerineRegular',
		fontSize: 16,
	};
	//Begin drawing the front page - IUX.me
	isAnimated = false;
	positionPath = new Path();
	positionPath.visible = false;
	positionPath.add(new Point(0, 0));
	positionPath.add(550, 121);
	if (rdFlag === 0) {
		positionPath.add(550, 121);
	}
	else {
		positionPath.add(410, 50);
	}

	//create the I
	i1Path = new Path();
	i1Path.visible = true;
	i1Path.strokeColor = 'black';
	i1Start = positionPath.getPointAt(positionPath.length);
	i1Ctr = 0;
	i1Flag = 0;
	i1Path.add(i1Start + [28.5, 0]);
	i1Path.curveTo(i1Start + [8, 8], i1Start + [0, 28.5]);
	i1Path.add(i1Start + [0, 393.5]);
	i1Path.curveTo(i1Start + [8, 414], i1Start + [28.5, 422]);
	i1Path.lineTo(i1Start + [62, 422]);
	i1Path.lineTo(i1Start + [62, 0]);
	i2Path = new Path();
	i2Start = positionPath.getPointAt(positionPath.length);
	i2Path.strokeColor = 'black';
	i2Path.add(i2Start + [62, 0]);
	i2Path.lineTo(i2Start + [124, 0]);
	i2Path.lineTo(i2Start + [124, 422]);
	i2Path.lineTo(i2Start + [62, 422]);
	i2Path.lineTo(i2Start + [62, 0]);
	i2Path.fillColor = 'black';

	//I created
	//Create the U
	var through;
	var to;
	positionPath.add(positionPath.getPointAt(positionPath.length) + [149, 0]);
	u1Start = positionPath.getPointAt(positionPath.length);
	u1Path = new Path();
	uCtr = 0;
	uFlag = 0;
	u1Path.strokeColor = 'black';
	u1Path.add(u1Start);
	u1Path.add(u1Start + [0, 367]);
	through = u1Start + [16, 406];
	to = u1Start + [62, 422];
	u1Path.arcTo(through, to);
	u1Path.add(u1Start + [62, 0]);
	u2Path = new Path();
	u2Start = positionPath.getPointAt(positionPath.length);
	u2Path.add(u2Start + [62, 422]);
	u2Path.strokeColor = 'black';
	through = u2Start + [108, 406];
	to = u2Start + [124, 367];
	u2Path.arcTo(through, to);
	u2Path.add(u2Start + [124, 0]);
	u2Path.add(u2Start + [62, 0]);
	u2Path.add(u2Start + [62, 300]);
	through = u1Start + [62, 350];
	to = u1Start + [62, 422];
	u2Path.curveTo(through, to);
	u2Path.closed = 'false';
	u2Path.fillColor = 'black';

	//U created
	//Create the X
	positionPath.add(positionPath.getPointAt(positionPath.length) + [149, 0]);
	x1Start = positionPath.getPointAt(positionPath.length);
	x1Path = new Path();
	x1Path.strokeColor = 'black';
	x1Path.add(x1Start);
	x1Path.add(x1Start + [0, 74]);
	x1Path.add(x1Start + [62, 136]);
	x1Path.add(x1Start + [0, 198]);
	x1Path.add(x1Start + [0, 272]);
	x2Path = new Path();
	positionPath.add(positionPath.getPointAt(positionPath.length) + [62, 0]);
	x2Start = positionPath.getPointAt(positionPath.length);
	x2Ctr = 0;
	x2Flag = 0;
	x2Path.strokeColor = 'black';
	x2Path.add(x2Start);
	x2Path.add(x2Start + [0, 272]);
	x2Path.add(x2Start + [62, 272]);
	x2Path.add(x2Start + [62, 198]);
	x2Path.add(x2Start + [0, 136]);
	x2Path.add(x2Start + [62, 74]);
	x2Path.add(x2Start + [62, 0]);
	x2Path.add(x2Start);
	x2Path.closed = 'true';
	x2Path.fillColor = 'black';

	//X created
	//draw .me
	positionPath.add(positionPath.getPointAt(positionPath.length) + [ - 92, 417]);
	dotStart = positionPath.getPointAt(positionPath.length);
	dotPath = new Path.Circle(dotStart, 8);
	dotPath.fillColor = 'black';
	dotFlag = 0;
	dotCtr = 0;
	//. done
	//m
	positionPath.add(positionPath.getPointAt(positionPath.length) + [30, - 119]);
	mStart = positionPath.getPointAt(positionPath.length);
	mPath = new Path();
	mPath.strokeColor = 'black';
	mPath.add(mStart + [0, 124]);
	mPath.add(mStart + [0, 14.25]);
	mPath.arcTo(mStart + [28.5, 14.25]);
	mPath.lineTo(mStart + [28.5, 124]);
	mPath.add(mStart + [28.5, 14.25]);
	mPath.arcTo(mStart + [57, 14.25]);
	mPath.add(mStart + [57, 124]);
	//m done
	//e
	positionPath.add(positionPath.getPointAt(positionPath.length) + [67, 0]);
	eStart = positionPath.getPointAt(positionPath.length);
	ePath = new Path();
	ePath.strokeColor = 'black';
	ePath.add(eStart + [57, 95.5]);
	ePath.arcTo(eStart + [0, 95.5]);
	ePath.lineTo(eStart + [0, 28.5]);
	ePath.arcTo(eStart + [57, 28.5]);
	ePath.lineTo(eStart + [0, 65]);
}

//iux.me logo done
function iOpen() {
	if (i1Flag === 1) {
		//dim the distractions
		if (i1Ctr < 180) {
			u1Path.opacity = 1 - (i1Ctr / 225);
			u2Path.opacity = 1 - (i1Ctr / 225);
			x1Path.opacity = 1 - (i1Ctr / 225);
			x2Path.opacity = 1 - (i1Ctr / 225);
			dotPath.opacity = 1 - (i1Ctr / 225);
			mPath.opacity = 1 - (i1Ctr / 225);
			ePath.opacity = 1 - (i1Ctr / 225);
		}
		//Animate the I
		if (i1Ctr < 90) {
			i1Path.rotate(( - 1), i1Start + [0, 422]);
			i1Ctr += 1;
		} else {
			if (i1Ctr < 180) {
				i1Path.translate(new Point(1.50, 0));
				i1Path.rotate(( - 1), i1Start + [ - 422 + ((i1Ctr - 90) * 1.50), 422]);
				i1Ctr += 1;
			}
		}
		if (i1Ctr === 180) {
			i1Flag = 2;
			isAnimated = true;
			document.getElementById("iContent").style.display = 'inline';
			document.getElementById("iWriteup").style.display = 'inline';
		}
	}
}

function uBloat() {
	if (uFlag === 1) {
		//dim the distractions
		if (uCtr < 175) {
			i1Path.opacity = 1 - (uCtr / 230);
			i2Path.opacity = 1 - (uCtr / 230);
			x1Path.opacity = 1 - (uCtr / 230);
			x2Path.opacity = 1 - (uCtr / 230);
			dotPath.opacity = 1 - (uCtr / 230);
			mPath.opacity = 1 - (uCtr / 230);
			ePath.opacity = 1 - (uCtr / 230);
		}
		//Animate the U
		if (uCtr < 175) {
			if (rdFlag === 0) {
				i1Path.translate(new Point( - 1, 0));
				i2Path.translate(new Point( - 1, 0));
				u1Path.translate(new Point( - 1, 0));
				u2Path.translate(new Point(1, 0));
				x1Path.translate(new Point(1, 0));
				x2Path.translate(new Point(1, 0));
				dotPath.translate(new Point(1, 0));
				mPath.translate(new Point(1, 0));
				ePath.translate(new Point(1, 0));
			}
			else {
				i1Path.translate(new Point( - 2, 0));
				i2Path.translate(new Point( - 2, 0));
				u1Path.translate(new Point( - 2, 0));
			}
			uCtr += 1;
		}
		if (uCtr === 175) {
			uFlag = 2;
			isAnimated = true;
			document.getElementById("uContent").style.display = 'inline';
		}
	}
}

function xPand() {
	if (x2Flag === 1) {
		//dim the distractions
		if (x2Ctr < 150) {
			i1Path.opacity = 1 - (x2Ctr / 180);
			i2Path.opacity = 1 - (x2Ctr / 180);
			u1Path.opacity = 1 - (x2Ctr / 180);
			u2Path.opacity = 1 - (x2Ctr / 180);
			dotPath.opacity = 1 - (x2Ctr / 180);
			mPath.opacity = 1 - (x2Ctr / 180);
			ePath.opacity = 1 - (x2Ctr / 180);
		}
		//Animate the X
		if (x2Ctr < 150) {
			if (x2Ctr % 12 === 7) {
				x2Path.rotate(180);
			}
			if (rdFlag === 0) {
				x2Path.translate(new Point(2.48, 0));
			}
			if (rdFlag === 1) {
				i1Path.translate(new Point( - 2.4, 0));
				i2Path.translate(new Point( - 2.4, 0));
				u1Path.translate(new Point( - 2.4, 0));
				u2Path.translate(new Point( - 2.4, 0));
				x1Path.translate(new Point( - 2.4, 0));
				dotPath.translate(new Point( - 2.4, 0));
				mPath.translate(new Point( - 2.4, 0));
				ePath.translate(new Point( - 2.4, 0));
			}

			x2Ctr += 1;
		}
		if (x2Ctr === 150) {
			isAnimated = true;
			x2Flag = 2;
			document.getElementById("xContent").style.display = 'inline';
			document.getElementById("xWriteup").style.display = 'inline';
		}
	}
}

function dotFade() {
	if (dotFlag === 1) {
		//dim distractions
		if (dotCtr < 200) {
			i1Path.opacity = 1 - (dotCtr / 200);
			i2Path.opacity = 1 - (dotCtr / 200);
			u1Path.opacity = 1 - (dotCtr / 200);
			u2Path.opacity = 1 - (dotCtr / 200);
			x1Path.opacity = 1 - (dotCtr / 200);
			x2Path.opacity = 1 - (dotCtr / 200);
		}
		//dim attractions
		if (dotCtr < 200) {
			dotPath.opacity = 1 - (dotCtr / 450);
			mPath.opacity = 1 - (dotCtr / 450);
			ePath.opacity = 1 - (dotCtr / 450);

			dotCtr += 1;
		}
		if (dotCtr === 200) {
			isAnimated = true;
			dotFlag = 2;
			document.getElementById("dotContent").style.display = 'inline';
			document.getElementById("dotWriteup").style.display = 'inline';
		}
	}
}

function dotAppear() {
	if (dotFlag === 1) {
		document.getElementById("dotContent").style.display = 'none';
		document.getElementById("dotWriteup").style.display = 'none';
		//undim distractions
		if (dotCtr >= 0) {
			i1Path.opacity = 1 - (dotCtr / 200);
			i2Path.opacity = 1 - (dotCtr / 200);
			u1Path.opacity = 1 - (dotCtr / 200);
			u2Path.opacity = 1 - (dotCtr / 200);
			x1Path.opacity = 1 - (dotCtr / 200);
			x2Path.opacity = 1 - (dotCtr / 200);
		}
		//dim attractions
		if (dotCtr >= 0) {
			dotPath.opacity = 1 - (dotCtr / 450);
			mPath.opacity = 1 - (dotCtr / 450);
			ePath.opacity = 1 - (dotCtr / 450);

			dotCtr -= 1;
		}
		if (dotCtr === 0) {
			isAnimated = false;
			dotFlag = 0;
		}
	}
}

function xTract() {
	if (x2Flag === 1) {
		document.getElementById("xContent").style.display = 'none';
		document.getElementById("xWriteup").style.display = 'none';
		if (x2Ctr >= 0) {
			i1Path.opacity = 1 - (x2Ctr / 180);
			i2Path.opacity = 1 - (x2Ctr / 180);
			u1Path.opacity = 1 - (x2Ctr / 180);
			u2Path.opacity = 1 - (x2Ctr / 180);
			dotPath.opacity = 1 - (x2Ctr / 180);
			mPath.opacity = 1 - (x2Ctr / 180);
			ePath.opacity = 1 - (x2Ctr / 180);
		}
		//Animate the X
		if (x2Ctr > 0) {
			if (x2Ctr % 12 === 7) {
				x2Path.rotate(180);
			}
			if (rdFlag === 0) {
				x2Path.translate(new Point( - 2.48, 0));
			}
			if (rdFlag === 1) {
				i1Path.translate(new Point(2.4, 0));
				i2Path.translate(new Point(2.4, 0));
				u1Path.translate(new Point(2.4, 0));
				u2Path.translate(new Point(2.4, 0));
				x1Path.translate(new Point(2.4, 0));
				dotPath.translate(new Point(2.4, 0));
				mPath.translate(new Point(2.4, 0));
				ePath.translate(new Point(2.4, 0));
			}
			x2Ctr -= 1;
		}
		if (x2Ctr === 0) {
			x2Flag = 0;
			isAnimated = false;
		}
	}
}

function iClose() {
	if (i1Flag === 1) {
		document.getElementById("iContent").style.display = 'none';
		document.getElementById("iWriteup").style.display = 'none';
		if (i1Ctr >= 0) {
			u1Path.opacity = 1 - (i1Ctr / 225);
			u2Path.opacity = 1 - (i1Ctr / 225);
			x1Path.opacity = 1 - (i1Ctr / 225);
			x2Path.opacity = 1 - (i1Ctr / 225);
			dotPath.opacity = 1 - (i1Ctr / 225);
			mPath.opacity = 1 - (i1Ctr / 225);
			ePath.opacity = 1 - (i1Ctr / 225);
		}
		//Animate the I
		if (i1Ctr > 0 && i1Ctr <= 90) {
			i1Path.rotate((1), i1Start + [0, 422]);
			i1Ctr -= 1;
		} else {
			if (i1Ctr > 90) {
				i1Path.rotate((1), i1Start + [ - 422 + ((i1Ctr - 91) * 1.50), 422]);
				i1Path.translate(new Point( - 1.50, 0));
				i1Ctr -= 1;
			}
		}
		if (i1Ctr === 0) {
			i1Flag = 0;
			isAnimated = false;
		}
	}
}

function uShrink() {
	if (uFlag === 1) {
		document.getElementById("uContent").style.display = 'none';
		if (uCtr >= 0) {
			i1Path.opacity = 1 - (uCtr / 430);
			i2Path.opacity = 1 - (uCtr / 430);
			x1Path.opacity = 1 - (uCtr / 430);
			x2Path.opacity = 1 - (uCtr / 430);
			dotPath.opacity = 1 - (uCtr / 430);
			mPath.opacity = 1 - (uCtr / 430);
			ePath.opacity = 1 - (uCtr / 430);
		}
		//Animate the U
		if (uCtr > 0) {
			if (rdFlag === 0) {
				i1Path.translate(new Point(1, 0));
				i2Path.translate(new Point(1, 0));
				u1Path.translate(new Point(1, 0));
				u2Path.translate(new Point( - 1, 0));
				x1Path.translate(new Point( - 1, 0));
				x2Path.translate(new Point( - 1, 0));
				dotPath.translate(new Point( - 1, 0));
				mPath.translate(new Point( - 1, 0));
				ePath.translate(new Point( - 1, 0));
			}
			else {
				i1Path.translate(new Point(2, 0));
				i2Path.translate(new Point(2, 0));
				u1Path.translate(new Point(2, 0));
			}
			uCtr -= 1;
		}
		if (uCtr === 0) {
			isAnimated = false;
			uFlag = 0;
		}
	}
}

//Calculations for firing the Back Animations
function calcBackLogic(){
    if(i1Flag === 2 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
        if(rdFlag === 0){
            rdx1 = 680;
            rdx2 = 200;
            rdy1 = 550;
    		rdy2 = 120;
        }
        else{
		    rdx1 = 545;
		    rdx2 = 65;
    		rdy1 = 480;
    		rdy2 = 55;
        }
    }
    else if(i1Flag === 0 && uFlag === 2 && x2Flag === 0 && dotFlag === 0) {
        if(rdFlag === 0){
		    rdx1 = 1005;
    		rdx2 = 530;
    		rdy1 = 550;
    		rdy2 = 120;
        }
        else{
		    rdx1 = 690;
		    rdx2 = 210;
    		rdy1 = 480;
    		rdy2 = 55;
        }
    }
    else if(i1Flag === 0 && uFlag === 0 && x2Flag === 2 && dotFlag === 0) {
        if(rdFlag === 0){
		    rdx1 = 1355;
    		rdx2 = 850;
    		rdy1 = 400;
    		rdy2 = 120;
        }
        else{
		    rdx1 = 840;
		    rdx2 = 350;
    		rdy1 = 330;
    		rdy2 = 55;
        }
    }
    else if(i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 2) {
        if(rdFlag === 0){
		    rdx1 = 790;
    		rdx2 = 290;
    		rdy1 = 530;
    		rdy2 = 110;
        }
        else{
		    rdx1 = 660;
		    rdx2 = 140;
    		rdy1 = 470;
    		rdy2 = 55;
        }
    }
    else if (rdFlag === 0) {
		rdx1 = 3;
		rdx2 = 50;
		rdy1 = 522;
		rdy2 = 542;
	}
	else {
		rdx1 = 800;
		rdx2 = 840;
		rdy1 = 5;
		rdy2 = 30;
	}
}

//Animations
function onFrame(event) {
	if (isAnimated === false) {
		iOpen();
		uBloat();
		xPand();
		dotFade();
	} else {
		iClose();
		uShrink();
		xTract();
		dotAppear();
	}
}

//UI Event Logic
function onMouseDown(event) {
	//Only to begin Animating from NOT ANIMATED state
	if ((event.downPoint.x > (i1Start.x - 10) && event.downPoint.x < (i1Start.x + 124 + 10)) && (event.downPoint.y > (i1Start.y - 10) && event.downPoint.y < (i1Start.y + 422 + 10)) && i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
		i1Flag = 1;
	}
	if ((event.downPoint.x > (u1Start.x - 10) && event.downPoint.x < (u1Start.x + 124 + 10)) && (event.downPoint.y > (u1Start.y - 10) && event.downPoint.y < (u1Start.y + 422 + 10)) && i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
		uFlag = 1;
	}
	if ((event.downPoint.x > (x1Start.x - 10) && event.downPoint.x < (x1Start.x + 124 + 10)) && (event.downPoint.y > (x1Start.y - 10) && event.downPoint.y < (x1Start.y + 262 + 10)) && i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
		x2Flag = 1;
	}
	if ((event.downPoint.x > (mStart.x - 10) && event.downPoint.x < (mStart.x + 124 + 10)) && (event.downPoint.y > (mStart.y - 14.25 - 10) && event.downPoint.y < (mStart.y + 124 + 10)) && i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
		dotFlag = 1;
	}
    //Enable Back Button for Javascript
    calcBackLogic();
	//Begin Animating from the ANIMATED state
	if ((event.downPoint.x > rdx1 || event.downPoint.x < rdx2) || (event.downPoint.y > rdy1 || event.downPoint.y < rdy2)) {
		if (i1Flag === 2 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) {
			i1Flag = 1;
		}
		if (i1Flag === 0 && uFlag === 2 && x2Flag === 0 && dotFlag === 0) {
			uFlag = 1;
		}
		if (i1Flag === 0 && uFlag === 0 && x2Flag === 2 && dotFlag === 0) {
			x2Flag = 1;
		}
		if (i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 2) {
			dotFlag = 1;
		}
	}
}

function onMouseMove(event){
    //Enable Back Button for Javascript
    calcBackLogic();
	if (((event.point.x > (i1Start.x - 10) && event.point.x < (x1Start.x + 124 + 10)) && (event.point.y > (i1Start.y - 10) && event.point.y < (mStart.y + 124 + 10)) && i1Flag === 0 && uFlag === 0 && x2Flag === 0 && dotFlag === 0) || (((event.point.x > rdx1 || event.point.x < rdx2) || (event.point.y > rdy1 || event.point.y < rdy2)) && (i1Flag === 2 || uFlag === 2 || x2Flag === 2 || dotFlag === 2))) {
		document.getElementById("myCanvas").style.cursor = 'pointer';
	}
	else {
		document.getElementById("myCanvas").style.cursor = 'default';
	}
}

function responsiveDesign() {
	if (window.innerWidth > 1320) {
		rdFlag = 0;
	}
	else {
		rdFlag = 1;
	}
	drawScreen();
}

function resizeDesign(){
	if (dotFlag === 2) {
		document.getElementById("dotContent").style.display = 'none';
		document.getElementById("dotWriteup").style.display = 'none';
    }
	if (x2Flag === 2) {
		document.getElementById("xContent").style.display = 'none';
		document.getElementById("xWriteup").style.display = 'none';
    }
	if (i1Flag === 2) {
		document.getElementById("iContent").style.display = 'none';
		document.getElementById("iWriteup").style.display = 'none';
    }
	if (uFlag === 2) {
		document.getElementById("uContent").style.display = 'none';
    }
    if(project.activeLayer.hasChildren()){
        project.activeLayer.removeChildren();
    }
    responsiveDesign();
}

//Assignment of event Listeners
if (window.addEventListener) // W3C DOM
{
	window.addEventListener("load", responsiveDesign(), false);
}
else if (window.attachEvent) { // IE DOM
	window.attachEvent("onload", responsiveDesign());
}

//Maybe someday... make this nice too :)
window.onresize=resizeDesign;
