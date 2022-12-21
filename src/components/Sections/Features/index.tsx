import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description:
      'Quam a velit animi fuga ad. Accusamus consectetur nulla perferendis quam. Aperiam error iusto id eos.',
  },
  {
    name: 'Notifications',
    description: 'Ut excepturi sequi et corrupti. Quidem est non ipsam sunt voluptatem. Velit dicta iusto. Molestiae.',
  },
  {
    name: 'List view',
    description:
      'Quis ratione necessitatibus ullam id animi iure accusamus debitis voluptas. Cumque debitis exercitationem.',
  },
  {
    name: 'Boards',
    description:
      'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
  },
  {
    name: 'Keyboard shortcuts',
    description: 'Optio assumenda eos neque. Quaerat temporibus dicta provident. Quia unde quo aut aut molestiae sit..',
  },
  {
    name: 'Reporting',
    description: 'Excepturi sed quo mollitia voluptatibus. Qui quo ut nihil quo. Dolor at dignissimos ea voluptatem.',
  },
  {
    name: 'Calendars',
    description:
      'Illum nesciunt odio. Dolorem nobis labore eveniet consequatur quas aut delectus molestias. Qui recusandae.',
  },
  {
    name: 'Mobile app',
    description:
      'Aut velit est eius dolore repudiandae. Vitae temporibus amet possimus mollitia. Quia molestiae rerum.',
  },
]

export default function Features() {
  return (
    <div className="mx-auto max-w-6xl py-16 sm:py-24 px-6 lg:px-8 lg:py-24">
      <div className='bg-orange-50 p-12 rounded-md'>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">Advanced Features</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-600">
            Features for small to enterprise sized businesses, with custom solutions available if needed.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute mt-2 h-4 w-4 text-zinc-600" aria-hidden="true" />
                <p className="ml-10 text-md font-semibold leading-8 text-black">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-zinc-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

  )
}
