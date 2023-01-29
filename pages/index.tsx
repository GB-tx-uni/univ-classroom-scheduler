import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Button from '../Components/Button/SubmitButton'

export default function Home() {

  const dates = [
    {
      "date": "1 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "2 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "3 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "4 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "5 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "6 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "7 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "8 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "9 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "10 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "11 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "12 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "13 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "14 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "15 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "16 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "17 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "18 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "19 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "20 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
    {
      "date": "21 Jan",
      "slots": [
        {
          "startTime": "10:00",
          "endTime": "10:30",
          "available": true
        }, {
          "startTime": "10:30",
          "endTime": "11:00",
          "available": true
        },
        {
          "startTime": "11:00",
          "endTime": "11:30",
          "available": true
        },
        {
          "startTime": "11:30",
          "endTime": "12:00",
          "available": true
        },
        {
          "startTime": "12:00",
          "endTime": "12:30",
          "available": true
        },
        {
          "startTime": "12:30",
          "endTime": "13:00",
          "available": true
        },
        {
          "startTime": "13:00",
          "endTime": "13:30",
          "available": true
        },
        {
          "startTime": "13:30",
          "endTime": "14:00",
          "available": true
        },
        {
          "startTime": "14:00",
          "endTime": "14:30",
          "available": true
        },
        {
          "startTime": "14:30",
          "endTime": "15:00",
          "available": true
        },
        {
          "startTime": "15:00",
          "endTime": "15:30",
          "available": true
        },
        {
          "startTime": "15:30",
          "endTime": "16:00",
          "available": true
        },
        {
          "startTime": "16:00",
          "endTime": "16:30",
          "available": true
        },
        {
          "startTime": "16:30",
          "endTime": "17:00",
          "available": true
        },
        {
          "startTime": "17:00",
          "endTime": "17:30",
          "available": true
        },
        {
          "startTime": "17:30",
          "endTime": "18:00",
          "available": true
        }
      ]
    },
  ]

  const [currentDateOffset, setCurrentDateOffset] = useState(0);

  const setNextOffset = () => {
    if (canGoToNextOffset())
      setCurrentDateOffset(currentDateOffset + 7)
  }

  const setPreviousOffset = () => {
    if (canGoToPreviousOffset())
      setCurrentDateOffset(currentDateOffset - 7)
  }

  const canGoToPreviousOffset = () => {
    return currentDateOffset - 7 >= 0
  }

  const canGoToNextOffset = () => {
    return currentDateOffset + 7 < dates.length
  }
  return (
    <>
      <div>
        {/* <button className='bg-green-200 px-4 py-2' onClick={setPreviousOffset}>Previous</button>
        <button className='ml-2 bg-green-200 px-4 py-2' onClick={setNextOffset}>Next</button> */}
        {/* <div className='w-full flex bg-blue-200 grid grid-cols-8'>
          <div className='m-2'><label></label></div>
          {
            dates.slice(currentDateOffset, currentDateOffset + 7).map(eachDate => {
              return <div className='m-2'><label>{eachDate.date}</label></div>
            })
          }
          {
            dates.slice(0, 7).map((eachDate, dateIndex) => {
              return eachDate.slots.map((eachSlot, timeIndex) => {
                return <>
                  <div className='m-2 py-2'><label>{eachSlot.startTime}-{eachSlot.endTime}</label></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                  <div className='m-2'><Button id={`${timeIndex} + '-', ${timeIndex}`} className='bg-green-300 text-black'>Available</Button></div>
                </>
              })
            })
          }
        </div> */}
      </div>
    </>
  )
}
