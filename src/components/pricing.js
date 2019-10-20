import React from 'react';

import './pricing.css';

const pricing = () => {
    return (
        <section name="pricing" className="small-menu menu-section">
            <div className="spacing">
                <p className="pricing-format">Pricing</p>
                <hr />
                <div className="menu-bot">
            <h5 className="pricing-sub">Let's leave it here for now...</h5>
            <br />
            <table className="table-menu">
                <tbody>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Bracelet</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Beautiful bracelett. Made with...</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>50</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Bracelet</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Beautiful bracelett. Made with...</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>50</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Bracelet</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Beautiful bracelett. Made with...</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>50</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

            </div>
        </section>
    );
}
export default pricing;