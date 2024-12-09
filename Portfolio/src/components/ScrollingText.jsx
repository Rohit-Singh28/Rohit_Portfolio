"use client"

import React from 'react';
import { motion } from 'framer-motion';

const RollingText = ({ text ,duration=0.40,stagger=0.035 }) => {

    return (
            <motion.h1
                initial="initial"
                whileHover="hovered"
                className={'relative block overflow-hidden whitespace-nowrap'}
            >
                <div>
                    {text.split("").map((l, i) => ( 
                        <motion.span
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hovered: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * i * 1.5,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l === " " ? "\u00A0" : l} 
                        </motion.span>
                    ))}
                </div>
                <div className="absolute inset-0">
                    {text.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: "100%",
                                },
                                hovered: {
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: duration,
                                ease: "easeInOut",
                                delay: stagger * i * 1.5,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l === " " ? "\u00A0" : l} 
                        </motion.span>
                    ))}
                </div>
            </motion.h1>
    );
};

export default RollingText;
