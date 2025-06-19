// Basketball Training Drills Generator - Main Application Logic

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const drillsForm = document.getElementById('drills-form');
    const resultsContainer = document.getElementById('results-container');
    const planSummary = document.getElementById('plan-summary');
    const drillsContainer = document.getElementById('drills-container');
    const printPlanBtn = document.getElementById('print-plan');
    const savePlanBtn = document.getElementById('save-plan');
    const newPlanBtn = document.getElementById('new-plan');

    // Drill Database - Organized by position, skill level, and focus area
    const drillsDatabase = {
        // Point Guard Drills
        pg: {
            beginner: {
                'shooting': [
                    {
                        name: "Form Shooting",
                        description: "Stand close to the basket and focus on proper shooting technique. Shoot 10 shots from 5 different spots within 5 feet of the basket.",
                        duration: 10,
                        equipment: ["ball", "hoop"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=BloEnNbz4Hk"
                    },
                    {
                        name: "Layup Fundamentals",
                        description: "Practice right and left-handed layups focusing on proper footwork and finishing. Complete 10 layups from each side.",
                        duration: 10,
                        equipment: ["ball", "hoop"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=UpH-kv-yCCQ"
                    },
                    {
                        name: "Spot Shooting",
                        description: "Shoot from 5 different spots at mid-range (10-15 feet). Take 5 shots from each spot, focusing on consistent form.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=Eo81KVhCgcg"
                    }
                ],
                'ball-handling': [
                    {
                        name: "Stationary Dribbling",
                        description: "Practice dribbling in place with your right and left hand. Focus on keeping your head up and maintaining control. 1 minute each hand.",
                        duration: 5,
                        equipment: ["ball"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=R5oZ4gwgkSI"
                    },
                    {
                        name: "Figure 8 Dribbling",
                        description: "Dribble the ball in a figure 8 pattern around your legs. Start slowly and gradually increase speed. 2 minutes total.",
                        duration: 5,
                        equipment: ["ball"],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=E6lxcGFHNnk"
                    },
                    {
                        name: "Walking Dribble Series",
                        description: "While walking, practice different dribble moves: crossovers, between the legs, and behind the back. Walk the length of the court 4 times.",
                        duration: 10,
                        equipment: ["ball"],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=MuRnQwLG-dY"
                    }
                ],
                'passing': [
                    {
                        name: "Wall Passing",
                        description: "Stand 5-10 feet from a wall and practice chest passes, bounce passes, and overhead passes. 20 repetitions of each pass type.",
                        duration: 10,
                        equipment: ["ball"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=OHT4uPCYgTM"
                    },
                    {
                        name: "Partner Passing",
                        description: "With a partner, practice different types of passes while stationary. Focus on accuracy and proper technique. 5 minutes total.",
                        duration: 10,
                        equipment: ["ball", "partner"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=0SxXvjzsNtY"
                    }
                ],
                'defense': [
                    {
                        name: "Defensive Slide Drill",
                        description: "Practice defensive slides in different directions, focusing on proper stance and quick movements. 30 seconds each direction, repeat 3 times.",
                        duration: 10,
                        equipment: [],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=xs5T9IiLCaY"
                    },
                    {
                        name: "Close-Out Drill",
                        description: "Practice closing out on an imaginary shooter, maintaining proper defensive stance. 10 repetitions.",
                        duration: 5,
                        equipment: [],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=BRTAh3ZCyps"
                    }
                ],
                'footwork': [
                    {
                        name: "Jump Stop Drill",
                        description: "Practice catching passes with a proper jump stop. Focus on balance and being in triple threat position. 10 repetitions.",
                        duration: 5,
                        equipment: ["ball", "partner"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=TBp5Yd5R5ks"
                    },
                    {
                        name: "Pivot Drill",
                        description: "Practice front and reverse pivots from triple threat position. 10 repetitions of each pivot type.",
                        duration: 10,
                        equipment: ["ball"],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=F-CvzWEY-xw"
                    }
                ],
                'conditioning': [
                    {
                        name: "Line Touches",
                        description: "Sprint from baseline to free throw line and back, then to half court and back, then to opposite free throw line and back, then full court and back. Rest for 30 seconds. Repeat 3 times.",
                        duration: 10,
                        equipment: [],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=lNs6DPCZl2o"
                    },
                    {
                        name: "Jumping Jacks",
                        description: "Perform 3 sets of 25 jumping jacks with 30 seconds rest between sets.",
                        duration: 5,
                        equipment: [],
                        difficulty: 1,
                        videoUrl: "https://www.youtube.com/watch?v=c4DAnQ6DtF8"
                    }
                ],
                'rebounding': [
                    {
                        name: "Box Out Drill",
                        description: "Practice proper box out technique with a partner. Focus on finding the opponent, making contact, and securing position. 5 minutes total.",
                        duration: 10,
                        equipment: ["partner"],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=zEdfJDgYQaE"
                    }
                ],
                'post-moves': [
                    {
                        name: "Basic Post Footwork",
                        description: "Practice basic post footwork including drop steps and hook shots. 10 repetitions on each side of the basket.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 2,
                        videoUrl: "https://www.youtube.com/watch?v=SKgVPbZ2ucI"
                    }
                ]
            },
            intermediate: {
                'shooting': [
                    {
                        name: "Mid-Range Pull-Up Jumpers",
                        description: "Dribble from the three-point line, stop at mid-range, and shoot a pull-up jumper. 5 shots from 5 different spots.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=kBUkHbcbl08"
                    },
                    {
                        name: "Floater Drill",
                        description: "Practice floaters from different angles around the paint. 10 shots from each side.",
                        duration: 10,
                        equipment: ["ball", "hoop"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=8K_kUxEzmlw"
                    },
                    {
                        name: "Catch and Shoot",
                        description: "Start at the corner, pass to a partner, run to the wing, receive pass back and shoot. 10 repetitions from each wing.",
                        duration: 15,
                        equipment: ["ball", "hoop", "partner"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=J8nriZm-A9c"
                    }
                ],
                'ball-handling': [
                    {
                        name: "Cone Dribbling",
                        description: "Set up 5 cones in a straight line and practice dribbling around them with different moves (crossover, between legs, behind back). 3 rounds.",
                        duration: 15,
                        equipment: ["ball", "cones"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=SIkJSM_YzuQ"
                    },
                    {
                        name: "Two-Ball Dribbling",
                        description: "Dribble two basketballs simultaneously at the same height, then alternate heights. 1 minute each variation.",
                        duration: 10,
                        equipment: ["ball"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=H4uSf_XYiQs"
                    },
                    {
                        name: "Change of Direction Drill",
                        description: "Full-speed dribbling with sudden changes of direction on command or at predetermined spots. 10 minutes total.",
                        duration: 15,
                        equipment: ["ball", "cones"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=bO9UsuDMnho"
                    }
                ],
                'passing': [
                    {
                        name: "Moving Partner Passes",
                        description: "With a partner, practice passing while moving up and down the court. Include chest passes, bounce passes, and overhead passes. 5 minutes total.",
                        duration: 10,
                        equipment: ["ball", "partner"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=KnLTcCN_Ri8"
                    },
                    {
                        name: "3-Man Weave",
                        description: "Practice the 3-man weave drill focusing on passing, cutting, and finishing at the basket. 10 repetitions.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=Dj-nXk_zv1k"
                    }
                ],
                'defense': [
                    {
                        name: "Close-Out and Recover Drill",
                        description: "Close out on a partner, who makes a move to the basket. Defender must recover and contain the dribble. 10 repetitions each person.",
                        duration: 15,
                        equipment: ["partner"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=oZu4-uYkbdU"
                    },
                    {
                        name: "Shell Defense Drill",
                        description: "Practice team defensive rotations and communication in a 4-on-4 shell drill. 10 minutes total.",
                        duration: 15,
                        equipment: ["partner"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=H_RWfP5lSuA"
                    }
                ],
                'footwork': [
                    {
                        name: "Ladder Footwork Drill",
                        description: "Perform various footwork patterns through an agility ladder, focusing on quick, precise movements. 10 repetitions of 3 different patterns.",
                        duration: 15,
                        equipment: ["agility-ladder"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=tMY3y-4y4Lc"
                    },
                    {
                        name: "Defensive Slide to Sprint",
                        description: "Perform defensive slides followed by sprints in different directions. 10 repetitions.",
                        duration: 10,
                        equipment: [],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=EKPAWCmXRVw"
                    }
                ],
                'conditioning': [
                    {
                        name: "17s",
                        description: "Sprint the full length of the court and back in 17 seconds or less. Rest for 30 seconds. Repeat 8 times.",
                        duration: 15,
                        equipment: [],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=Pf02BXQRCBk"
                    },
                    {
                        name: "Star Drill",
                        description: "Place 5 cones in a star pattern. Sprint from the center to each cone and back to center. Complete 3 full rounds.",
                        duration: 10,
                        equipment: ["cones"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=Z9u0_6FNxD0"
                    }
                ],
                'rebounding': [
                    {
                        name: "Partner Boxing Out",
                        description: "Practice boxing out a partner who tries to get the rebound. Switch roles after each rep. 20 repetitions total.",
                        duration: 10,
                        equipment: ["ball", "partner"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=aEQWz4tnWlc"
                    }
                ],
                'post-moves': [
                    {
                        name: "Post Move Combinations",
                        description: "Practice combinations of post moves (drop step, up-and-under, hook shot). 5 repetitions of each combination on both sides.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 3,
                        videoUrl: "https://www.youtube.com/watch?v=PGeSmYRHnlw"
                    }
                ]
            },
            advanced: {
                'shooting': [
                    {
                        name: "Game-Speed 3-Point Shooting",
                        description: "Practice 3-point shots at game speed, focusing on quick release and proper form. 10 shots from 5 different spots.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=ct7TBCNWUAY"
                    },
                    {
                        name: "Combo Move Pull-Up Jumpers",
                        description: "Execute a dribble combo move before pulling up for a jump shot. Practice from different spots on the court. 5 shots from 5 different spots.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=7XbExEJCxdw"
                    },
                    {
                        name: "3-Point Shooting Off Screens",
                        description: "Practice coming off screens for catch-and-shoot 3-pointers. Use multiple screen angles. 20 total shots.",
                        duration: 15,
                        equipment: ["ball", "hoop", "partner"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=UhDjiW8sPxE"
                    }
                ],
                'ball-handling': [
                    {
                        name: "Advanced Two-Ball Dribbling",
                        description: "Practice complex two-ball dribbling drills including crossovers, between legs, and behind the back with both balls. 3 minutes each variation.",
                        duration: 15,
                        equipment: ["ball"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=HPdL5yxgeBw"
                    },
                    {
                        name: "Full-Court Pressure Dribbling",
                        description: "Dribble full court against defensive pressure, focus on maintaining control and making moves to create space. 10 repetitions.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=FqGBTixJt7U"
                    },
                    {
                        name: "Chair Dribbling Series",
                        description: "Set up 5 chairs and practice different combo moves around each chair at game speed. 5 rounds.",
                        duration: 15,
                        equipment: ["ball"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=PepDp8CrBTY"
                    }
                ],
                'passing': [
                    {
                        name: "No-Look and Behind-the-Back Passes",
                        description: "Practice advanced passes including no-look and behind-the-back passes with a partner while moving. 5 minutes each pass type.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=dNx-ewJUbsU"
                    },
                    {
                        name: "Pick and Roll Passing",
                        description: "Practice making different passes out of pick and roll situations (pocket pass, lob, skip pass). 15 repetitions of each pass type.",
                        duration: 15,
                        equipment: ["ball", "hoop", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=Gsh-55yS9ZU"
                    }
                ],
                'defense': [
                    {
                        name: "1-on-1 Full Court Defense",
                        description: "Defend a ball handler full court, focusing on containing dribble and forcing difficult passes. 10 repetitions.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=NWKtHt8SrPY"
                    },
                    {
                        name: "Pick and Roll Defense",
                        description: "Practice different pick and roll defensive coverages (hedge, drop, switch). 5 repetitions of each coverage.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=C-XzyK459rE"
                    }
                ],
                'footwork': [
                    {
                        name: "Complex Agility Ladder Drills",
                        description: "Perform advanced footwork patterns through the agility ladder, focusing on speed and precision. 10 repetitions of 5 different patterns.",
                        duration: 15,
                        equipment: ["agility-ladder"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=sY2wa7aCBF8"
                    },
                    {
                        name: "Euro-Step Finishing",
                        description: "Practice Euro-step moves to finish at the basket from different angles. 10 repetitions from each side.",
                        duration: 15,
                        equipment: ["ball", "hoop"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=FxYLbqJcOPE"
                    }
                ],
                'conditioning': [
                    {
                        name: "Full-Court Suicide Sprints",
                        description: "Perform suicide sprints (baseline, free throw line, half court, opposite free throw line, opposite baseline) with minimal rest. 5 repetitions.",
                        duration: 15,
                        equipment: [],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=Pe-TLaLHdqw"
                    },
                    {
                        name: "Lateral Quickness Drill",
                        description: "Perform lateral slides with resistance bands around ankles. 30 seconds each direction, repeat 4 times.",
                        duration: 10,
                        equipment: ["resistance-bands"],
                        difficulty: 4,
                        videoUrl: "https://www.youtube.com/watch?v=MXuMGZFy6hc"
                    }
                ],
                'rebounding': [
                    {
                        name: "Competitive Rebounding",
                        description: "Practice rebounding against a partner who actively tries to get position. 20 repetitions, alternating offensive and defensive rebounding.",
                        duration: 15,
                        equipment: ["ball", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=n_ZELQzK9L8"
                    }
                ],
                'post-moves': [
                    {
                        name: "Advanced Post Move Counters",
                        description: "Practice counter moves when initial post move is defended. Work on reading the defense and reacting appropriately. 10 repetitions of each counter move.",
                        duration: 15,
                        equipment: ["ball", "hoop", "partner"],
                        difficulty: 5,
                        videoUrl: "https://www.youtube.com/watch?v=1KFzP8m9B0s"
                    }
                ]
            }
        },
        // Additional positions and drills would be defined here in the same structure
        // This is just a sample for PG position
        
        // Adding placeholder data for other positions (would be expanded with real drills)
        sg: { beginner: {}, intermediate: {}, advanced: {} },
        sf: { beginner: {}, intermediate: {}, advanced: {} },
        pf: { beginner: {}, intermediate: {}, advanced: {} },
        c: { beginner: {}, intermediate: {}, advanced: {} }
    };

    // Form Submission Handler
    drillsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const position = document.getElementById('position').value;
        const skillLevel = document.querySelector('input[name="skill-level"]:checked').value;
        const focusAreas = Array.from(document.querySelectorAll('input[name="focus"]:checked')).map(input => input.value);
        const trainingTime = parseInt(document.getElementById('training-time').value);
        const availableEquipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(input => input.value);
        
        // Validate selections
        if (!position || !skillLevel || focusAreas.length === 0) {
            alert('Please select your position, skill level, and at least one training focus.');
            return;
        }
        
        if (focusAreas.length > 3) {
            alert('Please select a maximum of 3 focus areas for optimal training.');
            return;
        }
        
        // Generate the training plan
        const trainingPlan = generateTrainingPlan(position, skillLevel, focusAreas, trainingTime, availableEquipment);
        
        // Display the training plan
        displayTrainingPlan(trainingPlan, position, skillLevel, focusAreas, trainingTime);
    });

    // Generate a personalized training plan based on user selections
    function generateTrainingPlan(position, skillLevel, focusAreas, trainingTime, availableEquipment) {
        let selectedDrills = [];
        let totalTime = 0;
        const warmupTime = 10; // Always allocate 10 minutes for warmup
        const remainingTime = trainingTime - warmupTime;
        
        // Time allocation per focus area
        const timePerFocus = Math.floor(remainingTime / focusAreas.length);
        
        // For each focus area, select appropriate drills
        focusAreas.forEach(focus => {
            let focusTimeAllocated = 0;
            let focusDrills = [];
            
            // Get all available drills for this position, skill level, and focus
            const availableDrills = drillsDatabase[position]?.[skillLevel]?.[focus] || [];
            
            // Filter drills based on available equipment
            const filteredDrills = availableDrills.filter(drill => {
                // Check if all required equipment is available
                return drill.equipment.every(item => availableEquipment.includes(item));
            });
            
            // If no suitable drills found, skip this focus area
            if (filteredDrills.length === 0) return;
            
            // Randomly select drills until we fill the time allocation for this focus
            while (focusTimeAllocated < timePerFocus && filteredDrills.length > 0) {
                // Randomly select a drill
                const randomIndex = Math.floor(Math.random() * filteredDrills.length);
                const selectedDrill = filteredDrills[randomIndex];
                
                // Add to selected drills if it fits within the time constraint
                if (focusTimeAllocated + selectedDrill.duration <= timePerFocus) {
                    focusDrills.push(selectedDrill);
                    focusTimeAllocated += selectedDrill.duration;
                    // Remove the selected drill to avoid duplicates
                    filteredDrills.splice(randomIndex, 1);
                } else {
                    // If no more drills fit, break the loop
                    break;
                }
            }
            
            // Add the selected drills for this focus area
            selectedDrills.push({
                focus: focus,
                drills: focusDrills,
                timeAllocated: focusTimeAllocated
            });
            
            totalTime += focusTimeAllocated;
        });
        
        // Add a generic warmup drill
        const warmupDrill = {
            name: "Dynamic Warmup",
            description: "Complete a full-body dynamic warmup including jogging, high knees, butt kicks, lateral slides, arm circles, and light stretching.",
            duration: warmupTime,
            equipment: [],
            difficulty: 1
        };
        
        return {
            warmup: warmupDrill,
            focusAreas: selectedDrills,
            totalTime: totalTime + warmupTime
        };
    }

    // Display the generated training plan
    function displayTrainingPlan(plan, position, skillLevel, focusAreas, trainingTime) {
        // Format position name for display
        const positionNames = {
            'pg': 'Point Guard',
            'sg': 'Shooting Guard',
            'sf': 'Small Forward',
            'pf': 'Power Forward',
            'c': 'Center'
        };
        
        // Format skill level for display
        const formattedSkillLevel = skillLevel.charAt(0).toUpperCase() + skillLevel.slice(1);
        
        // Format focus areas for display
        const formattedFocusAreas = focusAreas.map(focus => {
            // Convert kebab-case to Title Case
            return focus.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        });
        
        // Build the plan summary
        planSummary.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h3 class="font-bold text-lg mb-2">Training Overview</h3>
                    <p><span class="font-medium">Position:</span> ${positionNames[position]}</p>
                    <p><span class="font-medium">Skill Level:</span> ${formattedSkillLevel}</p>
                    <p><span class="font-medium">Focus Areas:</span> ${formattedFocusAreas.join(', ')}</p>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-2">Time Allocation</h3>
                    <p><span class="font-medium">Total Time:</span> ${plan.totalTime} minutes</p>
                    <p><span class="font-medium">Warmup:</span> ${plan.warmup.duration} minutes</p>
                    <p><span class="font-medium">Training:</span> ${plan.totalTime - plan.warmup.duration} minutes</p>
                </div>
            </div>
        `;
        
        // Build the drills content
        let drillsHTML = `
            <div class="drill-section mb-6">
                <h3 class="text-xl font-bold mb-4">Warmup (${plan.warmup.duration} min)</h3>
                <div class="drill-card bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 class="font-bold text-lg">${plan.warmup.name}</h4>
                    <p class="mt-2">${plan.warmup.description}</p>
                </div>
            </div>
        `;
        
        // Add drills for each focus area
        plan.focusAreas.forEach(focusArea => {
            // Format focus area name
            const formattedFocus = focusArea.focus.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            drillsHTML += `
                <div class="drill-section mb-6">
                    <h3 class="text-xl font-bold mb-4">${formattedFocus} (${focusArea.timeAllocated} min)</h3>
                    <div class="space-y-4">
            `;
            
            // Add each drill for this focus area
            focusArea.drills.forEach(drill => {
                drillsHTML += `
                    <div class="drill-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-lg">${drill.name}</h4>
                            <span class="text-orange-500 font-medium">${drill.duration} min</span>
                        </div>
                        <p class="mt-2">${drill.description}</p>
                        <div class="mt-4 flex flex-wrap justify-between items-center">
                            <div class="difficulty-indicator mb-2 md:mb-0">
                                <span class="text-sm font-medium mr-2">Difficulty:</span>
                                ${generateDifficultyDots(drill.difficulty)}
                            </div>
                            ${drill.videoUrl ? `
                                <a href="${drill.videoUrl}" target="_blank" class="text-blue-500 hover:text-blue-700 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                    Watch Example
                                </a>
                            ` : ''}
                        </div>
                    </div>
                `;
            });
            
            drillsHTML += `
                    </div>
                </div>
            `;
        });
        
        // Update the drills container
        drillsContainer.innerHTML = drillsHTML;
        
        // Show the results container
        resultsContainer.classList.remove('hidden');
        
        // Scroll to the results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Generate difficulty indicator dots (1-5 scale)
    function generateDifficultyDots(level) {
        let dots = '';
        for (let i = 1; i <= 5; i++) {
            dots += `<span class="difficulty-dot ${i <= level ? 'active' : ''}"></span>`;
        }
        return dots;
    }
    
    // Print Plan Handler
    printPlanBtn.addEventListener('click', () => {
        window.print();
    });
    
    // Save as PDF Handler
    savePlanBtn.addEventListener('click', () => {
        window.print(); // Most browsers will offer PDF save option when printing
    });
    
    // New Plan Handler
    newPlanBtn.addEventListener('click', () => {
        resultsContainer.classList.add('hidden');
        drillsForm.reset();
        
        // Scroll back to the form
        drillsForm.scrollIntoView({ behavior: 'smooth' });
    });
});