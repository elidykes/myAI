export default function handler(req, res) {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "Please send a message to get a response." });
    }

    if (message.toLowerCase().includes("fitness") || message.toLowerCase().includes("workout") || message.toLowerCase().includes("diet")) {
        return res.status(200).json({
            reply: `Plug in the following so I can better understand how I can assist you:
            
I am [age] years old [man/woman].  
- My height is [height].  
- My weight is [weight].  
- My goal is to [lose/gain/maintain] weight and reach [specific goal, e.g., target weight or body composition].  
- My current activity level is [sedentary/lightly active/moderately active/very active].  
- I typically eat [brief description of current diet, e.g., breakfast, lunch, dinner, snacks].  
- I have the following dietary preferences or restrictions: [e.g., vegetarian, gluten-free, no dairy].  
- I usually exercise [number of days] per week, doing [types of exercise, e.g., strength training, cardio, yoga].  
- I have the following health concerns or injuries: [e.g., asthma, knee injury].`
        });
    }

    return res.status(200).json({ reply: "How can I assist you today?" });
}
