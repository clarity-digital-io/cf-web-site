import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Field Mapping',
    description:
      'Map response to a new record or update a record.',
  },
  {
    name: 'Connected Objects',
    description: 'Relate a response automatically to an object.',
  },
  {
    name: 'Prefill Fields',
    description:
      'Add value to fields depending on record related.',
  },
  {
    name: 'Conditional Form Logic',
    description:
      'Show and hide fields conditionally.',
  },
  {
    name: 'Advanced Fields',
    description: 'Add repeating sections, camera options, and more.',
  },
  {
    name: 'Guided Forms',
    description: 'Embed images and notes for your form users.',
  },
  {
    name: 'Repeating Sections',
    description:
      'Capture data',
  },
  {
    name: 'Checklists',
    description:
      'Add multiple forms to a checklist for workflow management.',
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
