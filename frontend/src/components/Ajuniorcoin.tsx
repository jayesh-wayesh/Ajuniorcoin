import React, { useContext, useEffect, useState } from 'react';
import { AjuniorcoinContext } from "./../hardhat/SymfoniContext";
import Account from '../hooks/account';
import SimpleCard from '../hooks/card'

interface Props { }


export const Ajuniorcoin: React.FC<Props> = () => {

    const ajc = useContext(AjuniorcoinContext)
    const [amount, setAmount] = useState(0);
    const [address,setAddress] = useState('not assigned')

    useEffect(() => {
        const doAsync = async () => {
            if (!ajc.instance) return
            console.log("Ajuniorcoin is deployed at ", ajc.instance.address)
            const tx2 = await ajc.instance.owner()
        };
        doAsync();
    }, [ajc])

    const handleTokenMinting = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!ajc.instance) throw Error("Greeter instance not ready")
        if (ajc.instance) {
            const tx = await ajc.instance.mintTokens()
            console.log("token minting tx", tx)
            await tx.wait()
            console.log("token minting tx mined, result: ")
        }
    }

    return (
        <div>
            {/* <button onClick={(e) => handleTokenMinting(e)}>Mint Tokens</button> */}
            <SimpleCard/>
        </div>
    )
}