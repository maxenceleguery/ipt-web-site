var data = {
        sujets : [
                {
                        "name" : "Stuck metallic spheres",
                        "description" : "",
                        "linkName" : "sphere"
                },
                {
                        "name" : "Pringles stack ring",
                        "description" : "Let's build a ring with Pringles",
                        "linkName" : "pringles"
                },
               {
                        "name" : "Flapping flag",
                        "description" : "Is it possible to build an anenometer only using the sound of a flapping flag ?",
                        "linkName" : "flag"
                },
                {
                        "name" : "Mendocino meter",
                        "description" : "The Mendocino motor is a solar-powered magnetically levitated electric motor. Can one make a precise illuminance meter based on this motor? ",
                        "linkName" : "mendocino"
                },
                {
                        "name" : "Spinning droplets",
                        "description" : "",
                        "linkName" : "droplets"
                },
                {
                        "name" : "The chalk trick",
                        "description" : "With a chalk, it is possible to draw continuous lines on a board. However, by varying the angle of contact, the line can turn into a dotted line! ",
                        "linkName" : "chalk"
                },
                {
                        "name" : "Dancing lights",
                        "description" : "",
                        "linkName" : "lights"
                },
                {
                        "name" : "Bubble love and tensions",
                        "description" : "",
                        "linkName" : "bubble"
                },
                {
                        "name" : "Fire-shot-fire",
                        "description" : "How to extinguish a flame from a maximum distance ?",
                        "linkName" : "fire"
                },
                {
                        "name" : "Unstable levitation",
                        "description" : "",
                        "linkName" : "levitation"
                },
                {
                        "name" : "Graphite plasma lamp",
                        "description" : "Creation of a plasma ball in a microwave",
                        "linkName" : "plasma"
                },
        ],
        "annee" : 2023
}

function addSujet(name, description, linkName,annee) {
        var htmlCode = "<div class='u-accordion-item'> \n \
						<a class='u-accordion-link u-button-style u-grey-5 u-text-active-black u-text-grey-60 u-text-hover-black u-accordion-link-11' id='link-accordion-6d64' aria-controls='accordion-6d64' aria-selected='false'> \n \
							<span class='u-accordion-link-text'>"+name+"&nbsp;</span> \n \
							<span class='u-accordion-link-icon u-icon u-text-grey-40 u-icon-21'> \n \
								<svg class='u-svg-link' preserveAspectRatio='xMidYMin slice' viewBox='0 0 512 512' style=''> \n \
									<use xlink:href='#svg-d9e3'> \n \
									</use> \n \
								</svg> \n \
								<svg class='u-svg-content' viewBox='0 0 16 16' x='0px' y='0px' id='svg-d9e3'> \n \
									<path d='M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6 c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z'> \n \
									</path> \n \
								</svg> \n \
							</span> \n \
						</a> \n \
						<div class='u-accordion-pane u-container-style u-accordion-pane-11' id='accordion-6d64' aria-labelledby='link-accordion-6d64'> \n \
							<div class='u-container-layout u-container-layout-11'> \n \
								<p class='u-text u-text-default'>"+description+"</p> \n \
								<a href='./"+annee+"/"+linkName+"/"+linkName+".html' data-page-id='330846' class='u-border-1 u-border-palette-2-base u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-hover-black u-btn-11'>Learn more&nbsp; \n \
									<span class='u-icon u-icon-22'> \n \
										<svg class='u-svg-content' viewBox='0 0 490.667 490.667' x='0px' y='0px' style='width: 1em; height: 1em;'> \n \
											<path d='M466.201,237.781L231.534,3.115C229.55,1.131,226.841,0,224.003,0h-192c-4.309,0-8.213,2.603-9.856,6.592 s-0.725,8.555,2.304,11.627l227.136,227.115L24.451,472.448c-3.051,3.051-3.968,7.637-2.304,11.627 c1.664,3.989,5.547,6.592,9.856,6.592h192c2.837,0,5.547-1.131,7.552-3.115l234.667-234.667 C470.382,248.704,470.382,241.963,466.201,237.781z'> \n \
											</path> \n \
										</svg> \n \
										<img> \n \
									</span> \n \
								</a> \n \
							</div> \n \
						</div> \n \
					</div>"
        return htmlCode
}

window.onload = function () {
        document.getElementById("title").innerHTML = "Sujets Traités par l'ENSTA Paris en "+(data.annee-1).toString()+"-"+data.annee.toString()+"";
        accordions = document.getElementById('accordions');
        accordions.innerHTML="";
        data.sujets.forEach(sujet => {
                accordions.innerHTML+=(addSujet(sujet.name,sujet.description,sujet.linkName,data.annee) + "\n");
        });
};