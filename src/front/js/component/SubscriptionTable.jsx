import React from 'react';
import { Dot } from 'lucide-react';

export const SubscriptionTable = () => {
    return (
        <div className="container justify-content-center pt-3">
            <div className='container d-none d-md-block pt-3 pb-3'>
                <h2 className='mb-5 fs-4 fst-normal' style={{color:"#F0F2F4"}}>RESUMEN DE NIVELES DE SUSCRIPCIÓN</h2>
                <table className="table table-bordered border-secondary align-middle sub-table">
                    <thead>
                        <tr style={{backgroundColor:'#000000'}}>
                            <th scope="col">Características</th>
                            <th scope="col">clipped</th>
                            <th scope="col">clipped</th>
                            <th scope="col">clipped</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">50 likes por día.</th>
                            <td><Dot size={40} color={'#FE4556'}/></td>
                            <td><Dot size={40} color={'#896707'}/></td>
                            <td><Dot size={40} color={'#E1E4E8'}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Acceso a cualquier ubicación del Perú.</th>
                            <td><Dot size={40} color={'#FE4556'} /></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Haz match.</th>
                            <td><Dot size={40} color={'#FE4556'} /></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Publicidad al mínimo.</th>
                            <td><Dot size={40} color={'#FE4556'} /></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Descubre a quién le gustas.</th>
                            <td></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Nuevos Top.</th>
                            <td></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Super Likes semanales.</th>
                            <td></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row"> Boost gratis al mes.</th>
                            <td></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">¡Adicional los beneficios beneficios de Clipped free!</th>
                            <td></td>
                            <td><Dot size={40} color={'#896707'} /></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Manda mensajes antes de hacer match.</th>
                            <td></td>
                            <td></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Likes priorizados.</th>
                            <td></td>
                            <td></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Revisa los Likes que has enviado los últimos 7 días.</th>
                            <td></td>
                            <td></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                        <tr>
                            <th scope="row">Sumando todos los beneficios de Clipped Gold!</th>
                            <td></td>
                            <td></td>
                            <td><Dot size={40} color={'#E1E4E8'} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container d-block d-sm-block d-md-none ">
                <table className="table table-bordered border-secondary align-middle sub-table text-start">
                    <thead>
                        <tr>
                            <th className='px-4'>
                                clipped
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className='px-4'>50 likes por día.</td> </tr>
                        <tr><td className='px-4'>Acceso a cualquier ubicación del Perú.</td></tr>
                        <tr><td className='px-4'>Haz match.</td></tr>
                        <tr><td className='px-4'>Publicidad al mínimo.</td></tr>
                    </tbody>
                </table>
                <table className="table table-bordered border-secondary align-middle sub-table text-start">
                    <thead>
                        <tr>
                            <th className='px-4'>
                                clipped
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className='px-4'>50 likes por día.</td></tr>
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
                <table className="table table-bordered border-secondary align-middle sub-table text-start">
                    <thead>
                        <tr>
                            <th className='px-4'>
                                clipped
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr><td className='px-4'>50 likes por día.</td></tr>
                        <tr><td className='px-4'>Acceso a cualquier ubicación del Perú.</td></tr>
                        <tr><td className='px-4'>Haz match.</td></tr>
                        <tr><td className='px-4'>Publicidad al mínimo.</td></tr>
                        <tr><td className='px-4'>Descubre a quién le gustas.</td></tr>
                        <tr><td className='px-4'>Nuevos Top.</td></tr>
                        <tr><td className='px-4'>Super Likes semanales.</td></tr>
                        <tr><td className='px-4'> Boost gratis al mes.</td></tr>
                        <tr><td className='px-4'>¡Adicional los beneficios beneficios de Clipped free!</td></tr>
                        <tr><td className='px-4'>Manda mensajes antes de hacer match.</td></tr>
                        <tr><td className='px-4'>Likes priorizados.</td></tr>
                        <tr><td className='px-4'>Revisa los Likes que has enviado los últimos 7 días.</td></tr>
                        <tr><td className='px-4'>Sumando todos los beneficios de Clipped Gold!</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
