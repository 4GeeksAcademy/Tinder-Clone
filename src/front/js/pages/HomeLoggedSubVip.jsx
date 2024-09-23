import React from 'react'
import { HomeLogSubLevel, RowLevel } from '../component/HomeLogSubLevel.jsx'

export const HomeLoggedSubVip = () => {
    return (
        < >
            <HomeLogSubLevel>
                <RowLevel title="Clipped Vip" description="Lleva los beneficios premium al siguiente nivel" />
            </HomeLogSubLevel>

            <div className='overflow-scroll' style={{ scrollbarWidth: 'none' }}>
                <HomeLogSubLevel>
                    <RowLevel title="Clipped Vip" description="" />
                </HomeLogSubLevel>
                <table className="table table-bordered border-secondary align-middle sub-table text-start">
                    <thead>
                        <tr>
                            <th className='px-4'>
                                clipped
                            </th>
                        </tr>Descubre a quién le gustas
Nuevos Top
Super Likes semanales
1 Boost gratis al mes
¡Adicional los beneficios beneficios de Clipped free!
                    </thead>
                    <tbody>
                        <tr><td className='px-4 align-items-center'>50 likes por día.</td></tr>
                        <tr><td className='px-4'>Acceso a cualquier ubicación del Perú.</td></tr>
                        <tr><td className='px-4'>Haz match.</td></tr>
                        <tr><td className='px-4'>Publicidad al mínimo.</td></tr>
                        <tr><td className='px-4'>Descubre a quién le gustas.</td></tr>
                        <tr><td className='px-4'>Nuevos Top.</td></tr>
                        <tr><td className='px-4'>Super Likes semanales.</td></tr>
                        <tr><td className='px-4'> Boost gratis al mes.</td></tr>
                        <tr><td className='px-4'>¡Adicional los beneficios beneficios de Clipped free!</td></tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}