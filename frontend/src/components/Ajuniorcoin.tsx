import React, { useContext, useEffect, useState } from 'react';
import { AjuniorcoinContext } from "./../hardhat/SymfoniContext";

interface Props { }

export const Ajuniorcoin: React.FC<Props> = () => {
    const ajc = useContext(AjuniorcoinContext)
    const [inputAddress, setInputAddress] = useState("");
    
    useEffect(() => {
        const doAsync = async () => {
            if (!ajc.instance) return
            console.log("Ajuniorcoin is deployed at ", ajc.instance.address)
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

    const handleTransferToken = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!ajc.instance) throw Error("Greeter instance not ready")
        if (ajc.instance) {

            const tx2 = await ajc.instance.transfer(inputAddress, 10)
            await tx2.wait()

        }
    }

    return (
        <div>
            <button onClick={(e) => handleTokenMinting(e)}>Mint Tokens</button>
            <input onChange={(e) => setInputAddress(e.target.value)}></input>
            <button onClick={(e) => handleTransferToken(e)}>Transfer Tokens</button>
        </div>
    )
}