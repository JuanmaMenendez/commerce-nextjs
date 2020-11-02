import React, { FC } from 'react'
import { Container } from '@components/ui'
import { RightArrow } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface Props {
  className?: string
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            {headline}
          </h2>
          <div className="flex flex-col justify-between">
            <p className="mt-5 text-lg leading-7 text-accent-2 text-white">
              {description}
            </p>
              <p className="text-white text-2xl pt-3 font-bold flex flex-row">
                Start a cart anytime, anywhere. Get all your groceries, meals, household essentials and meds in one go
                {/*<RightArrow width="20" heigh="20" className="ml-1" />*/}
              </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
