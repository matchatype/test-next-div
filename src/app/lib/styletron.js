import {Client, Server} from 'styletron-engine-atomic'
import {DebugEngine} from 'styletron-react'
import {isServer} from './helpers'

const getHydrateClass = () => document.getElementsByClassName('_styletron_hydrate_')

export const styletron = isServer()
  ? new Server()
  : new Client({
      hydrate: getHydrateClass(),
    })

export const debug = process.env.NODE_ENV === 'production' ? undefined : new DebugEngine()
