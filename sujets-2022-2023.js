var data = {
        sujets : [
                {
                        "name" : "Stuck metallic spheres",
                        "description" : "Fill a bottle with small metal/plastic spheres with diameters of the same order of magnitude as the size of the opening.<br>Try to pour the spheres out of the bottle by turning it upside down. Similar to pouring salt from small openings, one can see that after a certain time the spheres become stuck and stop pouring out.<br>Investigate the phenomenon. What is the average time it takes before the system becomes stuck? What bottle shapes can prevent the system from getting stuck ?",
                        "linkName" : "sphere"
                },
                {
                        "name" : "Pringles stack ring",
                        "description" : "It is possible to build structures by stacking Pringles on top of one another in various configurations. What are the physical parameters that allow some geometric patterns to be constructed? What is the largest stack ring that can be built? What maximal weight can it support ?",
                        "linkName" : "pringles"
                },
               {
                        "name" : "Flapping flag",
                        "description" : "Study a flag (or any piece of fabric and other sheet materials) hanging down while being subject to a uniform wind. Under what conditions does it start flapping? Build the most accurate anemometer based on the sound of the flapping flag.",
                        "linkName" : "flag"
                },
                {
                        "name" : "Mendocino meter",
                        "description" : "The Mendocino motor is a solar-powered magnetically levitated electric motor. Can one make a precise illuminance meter based on this motor ?",
                        "linkName" : "mendocino"
                },
                {
                        "name" : "Spinning droplets",
                        "description" : "One can make small water droplets rotate over a hydrophobic surface by making various hydrophilic patterns over them. What properties of the liquid (not necessarily water) can we extract from this type of experiment? Optimize the setup to maximize the rotational speed of the droplets.",
                        "linkName" : "droplets"
                },
                {
                        "name" : "The chalk trick",
                        "description" : "It is possible to draw continuous lines in a blackboard with chalk. However, by changing the angle of contact, the line drawn on the board becomes a dotted line, though the movement is still continuous. What parameters from the relative movement between the chalk and the board can be inferred from the resulting trace? Is it possible to infer anything about the dimensions of the chalk ?",
                        "linkName" : "chalk"
                },
                {
                        "name" : "Dancing lights",
                        "description" : "Put a membrane with a mirror over a speaker. Then project the reflection of a laser pointer over a screen. By driving the speaker with single or multiple frequencies you may observe lines and shapes projected in the screen. Given a closed trajectory in 2D of a single line, find the input on the speaker required to “paint” the line. Can you also “rotate” the line as you desire? Investigate the limitations.",
                        "linkName" : "lights"
                },
                {
                        "name" : "Bubble love and tensions",
                        "description" : "When two soap bubbles collide, they may rebound or coalesce. Find the conditions for both phenomena to occur.",
                        "linkName" : "bubble"
                },
                {
                        "name" : "Fire-shot-fire",
                        "description" : "It is well known that a directed air blast can suppress a fire. Usually, such air blasts are directed by guiding the air through a pipe. Determine the parameters of the pipe to extinguish the fire from a maximum distance (measured from the end of the tube closest to the fire) using only your breath. Perform experiments on the fire from a candle.",
                        "linkName" : "fire"
                },
                {
                        "name" : "Unstable levitation",
                        "description" : "It is possible to levitate a magnet stably without a superconductor or control system using a magnet rotating at high speeds.",
                        "linkName" : "levitation"
                },
                {
                        "name" : "Graphite plasma lamp",
                        "description" : "When a graphite rod is placed in a microwave oven, one can observe plasma formation at the tip of the rod. Investigate the duration of the phenomenon and the influencing parameters (microwave power, rod geometry and material, volume of the containment bowl, etc.). Investigate the duration of the plasma phase without burning the graphite rod: can we create an infinite lamp ?",
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
                                                                <a href='./"+annee+"/"+linkName+"/"+linkName+"Video.html' data-page-id='330846' class='u-border-1 u-border-palette-2-base u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-hover-black u-btn-11'>Videos&nbsp; \n \
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