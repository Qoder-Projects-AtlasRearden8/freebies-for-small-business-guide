# AI helpers: drafts, not decisions

**The job:** Use free AI to get unstuck on drafting, summarizing, planning, and explaining—without handing it your secrets, your judgment, or your legal and tax decisions. AI is a fast intern with no memory of your business and a habit of sounding certain when it is wrong.

> **This is education, not legal, tax, accounting, or medical advice.** AI output can be inaccurate, outdated, biased, or invented. Verify facts, numbers, links, prices, and policy details against official sources. Never use AI to diagnose or treat a patient, give medical advice, or replace a licensed professional. Never put protected health information, client data, account numbers, EINs, passwords, or API keys into a chat you do not control.

## Start with the right kind of AI

For a one-person business, "AI" usually means one of three things:

| Kind | What it is | Good first use | Main caution |
|---|---|---|---|
| Hosted chatbot | A website or app that runs a model for you | Drafting, summarizing, explaining, brainstorming | Your input leaves your device; check data controls |
| Local AI | A model running on your own computer | Private drafting and organizing | Hardware limits; still verify output |
| Coding assistant | AI inside an editor or terminal | Learning code, fixing small errors | Review every change; never expose secrets |

**Pick one hosted assistant and learn it well.** ChatGPT, Claude, Gemini, Microsoft Copilot, and Perplexity all offer free tiers, but limits and terms change. The best free assistant is the one whose privacy settings you understand and whose answers you actually check.

## Set up privacy before you get productive

Do this once, before you paste anything real.

1. **Use a business-only account.** Do not mix a personal account full of family photos and banking emails with your business drafts.
2. **Find the data controls.** Look for settings about model training, chat history, and "improve the service." Turn off training or data improvement where the provider offers it. Terms differ; read the current policy.
3. **Use temporary or incognito chats** for one-off questions when available.
4. **Assume anything you paste could be stored.** The safest sensitive document is one you never upload.
5. **Redact before you paste.** Replace names with `[CLIENT]`, amounts with `[AMOUNT]`, addresses with `[CITY]`, and account numbers with `[REDACTED]`.
6. **Turn on two-factor authentication** for the account.
7. **Keep a simple rule:** no SSNs, EINs, bank logins, passwords, API keys, medical records, contracts you don't own, or other people's private information.

Free consumer plans are not a secure records system. If you need a signed business agreement, use document storage, not a chat history.

## A redaction checklist

Before pasting, scan for:

- Names, email addresses, phone numbers, and home addresses
- Social Security numbers, EINs, tax IDs, and dates of birth
- Bank and card numbers, routing numbers, and account balances
- Passwords, recovery codes, API keys, and access tokens
- Patient information, diagnoses, prescriptions, and insurance IDs
- Unpublished book text, client materials, or someone else's contract
- Anything you would not want a stranger to read

If removing the detail makes the prompt useless, the task probably needs a local tool or a human professional—not a public chatbot.

## Local AI: free, private, and a little nerdy

Local tools run a model on your own computer. Nothing is sent to a cloud service, which is appealing for sensitive drafts. The trade-off is hardware, setup, electricity, and model quality.

Worth knowing:

- **[Ollama](https://ollama.com/)** — a beginner-friendly way to run models locally.
- **[LM Studio](https://lmstudio.ai/)** — a desktop app with a chat interface and model downloads.
- **[llama.cpp](https://github.com/ggml-org/llama.cpp)** — the lower-level engine many local tools build on.
- **[Open WebUI](https://github.com/open-webui/open-webui)** — a self-hosted chat interface for local or hosted models.

A practical minimum is a reasonably recent computer with 16 GB of RAM for small models; larger models need more. A small local model can organize notes and draft routine text. It is not automatically safer to trust—it can still hallucinate. It is safer with **data**, not necessarily with **facts**.

**Do not self-host on the public internet just to "have AI."** If you expose a chat interface without authentication, you may expose your files. Local means local.

## Free AI coding helpers

If you want to learn to build a small tool or fix your own website, these are legitimate starting points. Free plans and limits change constantly.

- **GitHub Copilot Free** — AI suggestions inside common editors for eligible GitHub accounts: <https://github.com/features/copilot>.
- **Gemini CLI** — an open-source command-line assistant with a free tier for Google accounts: <https://github.com/google-gemini/gemini-cli>.
- **Cline** — an open-source coding agent for VS Code; you provide the model: <https://cline.bot/>.
- **Continue** — open-source AI assistance you can configure with local or hosted models: <https://continue.dev/>.
- **Aider** — open-source pair programming in the terminal; model usage may cost money: <https://aider.chat/>.
- **OpenRouter** — one API for many models, with some free models and usage limits: <https://openrouter.ai/>.

**Coding safety rules:**
- Never paste API keys into a chat or commit them to a repository.
- Review every code change before running it. AI can introduce security bugs.
- Don't give an agent broad access to your email, bank, or file system until you understand its permissions.
- Test on a copy before changing a live site.
- Keep backups and version control.

Agents and MCP tools can be genuinely useful, but they can also take actions. A beginner should start with read-only suggestions, not an autonomous agent with your passwords.

## Prompt patterns that work for a tiny business

| Job | Prompt shape | Verify |
|---|---|---|
| Setup plan | "Ask me five questions, then give a 7-step plan under 30 minutes per step" | Tool limits and prices |
| Invoice reminder | "Warm, under 110 words, one clear next step, no invented late fee" | Due date and contract terms |
| CRM notes | "Summarize only the facts I provide; mark missing facts TBD" | Names and commitments |
| Welcome email | "Four short emails, no fake scarcity, one CTA each" | Claims and footer address |
| Homepage copy | "Plain English, one primary CTA, no invented testimonials" | Every factual claim |
| Design brief | "Propose colors, system fonts, and five assets; tell me to test contrast" | Accessibility contrast |
| Form cleanup | "Remove unnecessary questions; flag sensitive data" | Data you actually need |
| Contract questions | "Explain this excerpt and list questions for an attorney" | A licensed attorney |
| Learning plan | "45-minute practice-first session with a self-check" | Official course details |
| Monthly close | "Sort anonymized transactions; list ambiguous items as questions" | Your accountant |

## A reusable business helper prompt

Save this as a starting point. Change the role and constraints, not the privacy rules.

```text
You are a calm, practical assistant for a one-person business. Use plain
English and short paragraphs. Ask before assuming. Label every assumption
as [assumption]. Do not invent facts, prices, laws, links, testimonials,
or statistics. If you are unsure, say so and tell me what to verify.
Never ask me for passwords, account numbers, EINs, health information, or
other sensitive data. Do not give legal, tax, medical, or financial
advice; instead, list questions for a licensed professional. Keep outputs
short enough to use today.
```

Then add the task. The constraints do a lot of work.

## The verification checklist

Before you use any AI output:

- **Facts:** Can you find the claim on an official or primary source?
- **Numbers:** Did you recalculate totals and dates yourself?
- **Links:** Does the link load, and is it the official page?
- **Law and tax:** Did a licensed professional confirm the rule for your situation?
- **Health:** Is this education only, with no patient-specific advice?
- **Privacy:** Did you remove names, IDs, and sensitive details?
- **Tone:** Does it sound like you, or like a generic brochure?
- **Responsibility:** Are you willing to stand behind the final version?

If the answer to the last question is no, don't send it.

## What AI should not decide

- Whether an expense is deductible, or how to classify your LLC for tax.
- Whether a contract is enforceable or safe to sign.
- Whether a patient should receive a treatment or a diagnosis.
- Whether a marketing claim is legal or substantiated.
- Whether a person is trustworthy, hirable, or creditworthy.
- What your prices, boundaries, or values should be.

AI can help you prepare better questions for the humans who carry that responsibility.

## AI helper: audit your own AI use

```text
Audit my AI workflow as a cautious operations assistant. I will describe
the tools I use and the kinds of information I paste, without sharing
actual sensitive data. Identify: 1) places where I might be exposing
personal or business data, 2) tasks where a local model or a human
professional is a better fit, 3) three prompts I should rewrite to
include verification steps, and 4) a one-page monthly AI hygiene
checklist. Do not claim that any setup is legally compliant. Do not ask
for secrets.
```

Run this audit once a quarter, or whenever you add a new tool.

## Sources

- Ollama: <https://ollama.com/>
- LM Studio: <https://lmstudio.ai/>
- llama.cpp: <https://github.com/ggml-org/llama.cpp>
- Open WebUI: <https://github.com/open-webui/open-webui>
- GitHub Copilot: <https://github.com/features/copilot>
- Gemini CLI: <https://github.com/google-gemini/gemini-cli>
- Cline: <https://cline.bot/>
- Continue: <https://continue.dev/>
- Aider: <https://aider.chat/>
- OpenRouter: <https://openrouter.ai/>
- FTC, protecting personal information: <https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business>
- HHS, HIPAA privacy resources (background for healthcare-adjacent work): <https://www.hhs.gov/hipaa/for-professionals/privacy/index.html>

*Free plans, model names, and data terms checked October 22, 2026. They change often; verify with the provider.*

**Not legal, tax, or medical advice.** Next: [90-day setup plan →](14-90-day-plan.md)
