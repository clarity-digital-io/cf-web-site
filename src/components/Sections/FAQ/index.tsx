const faqs = [
  {
    id: 1,
    question: 'What type of Salesforce edition do I need?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "Is there a minimum of mobile user licenses?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'Do you offer discounts to non profit organizations? ',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Can you provide support to create custom forms?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

export default function FAQ() {
  return <div className="bg-orange-50">
    <div className="mx-auto max-w-6xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-left text-4xl font-extrabold tracking-tight text-zinc-900">Frequently Asked Questions</h2>
      <div className="mt-12">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
          {faqs.map((item) => (
            <div key={item.id}>
              <dt className="text-lg font-medium leading-6 text-zinc-900">{item.question}</dt>
              <dd className="mt-2 text-base text-zinc-500">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
}
