import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Salesforce Native',
    description:
      'Clarity Forms provides the possibility of a deep integration with all the Salesforce workflow tools.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Field Ready',
    description:
      'Guide your team with our Mobile app, and easily capture the data needed to improve your business.',
    icon: ScaleIcon,
  },
  {
    name: 'Customizations Available',
    description:
      'Use conditional fields, prefilled fields, guided forms + customize your user\'s Mobile App Experience.',
    icon: BoltIcon,
  },
]

export default function QuickOverview() {
  return (
    <div className="bg-orange-50 py-12 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-xl px-6 lg:max-w-6xl lg:px-8">
        <h2 className="sr-only">Salesforce Native Mobile Forms.</h2>
        <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-6 text-sm font-bold leading-8 tracking-tight text-zinc-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-sm leading-7 text-zinc-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
