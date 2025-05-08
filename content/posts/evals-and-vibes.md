#### Why vibes are everything

How do we know someone is doing a good job?

How do we know if AI is doing a good job?

The answer should probably be the same. We have them do the work and check whether the outcome makes sense and impresses us. While this might be very frustrating from a training and systems engineering perspective, the reality is that most human tasks have no easily expressed rubric for success. If you think about school, I’m sure we all have examples of tasks where success is defined clearly and verifiably—like math or physics calculations—and tasks where success is more subjective, such as writing an essay on the history of the Spanish Civil War.

In an office job, after the initial interview, the quality of work is often judged as the culmination of your efforts over a quarter or a year. Yes, there are individual tasks you have to complete, but most are probably never checked closely. Instead, the output of your work—as it relates to your team members and your boss—is what gets scrutinized.

That’s why vibes in the evaluation of (LLM) models are so important. Yes, a comprehensive set of evaluations allows you to understand how a model performs on a defined set of tasks, but it still provides a spotty picture. When we talk about vibes, we mean holistic performance across tasks that’s hard to put into words.

When training, we try to extrapolate from a set of evals to a general picture of performance—for example, in coding or creative writing. The problem is that any form of machine learning can easily overfit to a set of tasks, which then masquerades as universal performance. In LLM training, we see Goodhart's law applied to concrete use cases, where performance on evals or leaderboards is chased (or “gamed”) at the detriment of real performance. Collaborations like the one between Anthropic and Cursor avoid this problem by focusing on delivering a great product to power users, who can give feedback on both holistic performance and individual details.

Similarly, we should assume that ChatGPT is being used in many unintended ways—and is doing much better in those use cases than its developers anticipated. But without a feedback mechanism feeding back into training, it's difficult to ensure those successes contribute to broader improvements in intelligence.

This problem is getting thornier as humans acclimate to state-of-the-art performance incredibly quickly. For the longest time, the Turing Test seemed like an important milestone. It came and went, and now we’re dissatisfied if ChatGPT can’t perform a complex research task in under five minutes. Human expectations will only keep rising—which isn’t necessarily the case in human-to-human interactions. Once you get to know a colleague, you usually have a good sense of how smart or capable they are within a day or a week. At the same time, you’d expect to teach them about a specific task and provide context about the environment they operate in. You’d also expect them to ask questions and keep learning.

The issue of mismatched expectations is compounded by the fact that LLMs are tools that (currently) mirror our own abilities. If you’re an expert in a particular field, you might find they help you move fast and avoid tedium. But if you’re a novice, they often just reflect novice-level understanding back at you. You can feel this clearly as a developer when using the same model in a language you know versus one you don’t. If you don’t know how something works, LLMs will often not proactively volunteer insights unless explicitly prompted to reason through a problem.

In the end, the question of how good an LLM is mirrors the question we ask of a human:

What do you care about in the output?

Do you have enough understanding of the field to meaningfully critique it?

When we assign a task to a human, we don’t judge them based on the first answer they blurt out. We judge them on what they produce after taking time to think, using tools, reasoning, and checking their work. If you ask someone to do a financial analysis but don’t give them a calculator or Excel, you won’t expect much detail. If you ask someone to critique a movie, you expect them to have seen it in full—and to have seen many others. More importantly, you expect that the person can improve at the task over time.

Those same assumptions—the ability to reason, to learn, to use tools—we should apply when asking AIs to perform real-world tasks. With reasoning, multimodal capabilities, MCP, and tool use, we’re beginning to chart a path where AIs can actually be effective in the real world.

