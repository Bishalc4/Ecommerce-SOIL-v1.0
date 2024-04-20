import React from 'react';
import Vegetable_Gardening from '../../assets/Vegetable-Gardening.jpg'
import './GrowItYourself.scss';

function GrowItYourself() {
    return (
        <div className="grow-it-yourself-container">
            <h1>Small-Scale Farming</h1>
            <img src={Vegetable_Gardening} alt="Vegetable Garden" />
            <h2>Vegetables to Grow in Your Backyard</h2>
            <div className="section">
                <h3>Essential Needes to Grow Organic Vegetables:</h3>
                <p>
                    <strong>Sunshine:</strong> Most vegetables require full sun during the day. It's important to plant them in your backyard where the sun is not blocked by other objects.
                </p>
                <p>
                    <strong>Good Soil:</strong> All veggies need the best organic soil mix to grow to their full potential. The qualities to look for in good soil are fertility and texture. 
                    Adding one or more forms of organic matter promotes the healthiest soil for vegetable growth and development.
                </p>
                <p>
                    <strong>Seeds or Seedlings:</strong> Decide whether you want to start from seeds or purchase young seedlings. For beginners, seedlings is the better option.
                </p>
                <p>
                    <strong>Watering:</strong> Maintain a consistent watering schedule. Water in the morning to allow the soil to dry during the day.
                </p>
                <p>
                    <strong>Space:</strong> There are many different ways to plant your veggies – garden beds, plots in the ground, planters, pots, vertical gardens, and more.
                </p>
            </div>

            <h2>Example of How to Grow a Vegetable in Your Backyard</h2>
            <h3>Carrot</h3>
            <table className="carrot-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harvest Time</td>
                        <td>2-3 months </td>
                    </tr>
                    <tr>
                        <td>Ideal Temperatures</td>
                        <td>All year round</td>
                    </tr>
                    <tr>
                        <td>Planting Time</td>
                        <td>Late summer to early autumn</td>
                    </tr>
                    <tr>
                        <td>Spacing</td>
                        <td>approximately 15.24 - 45.72 cm </td>
                    </tr>
                    <tr>
                        <td>Germination Time</td>
                        <td>2-15 days</td>
                    </tr>
                    <tr>
                        <td>Light Preference</td>
                        <td>Full sun</td>
                    </tr>
                </tbody>
            </table>
            <h3>Potato</h3>
            <table className="potato-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harvest Time</td>
                        <td>3-4 months</td>
                    </tr>
                    <tr>
                        <td>Ideal Temperatures</td>
                        <td>All year round</td>
                    </tr>
                    <tr>
                        <td>Planting Time</td>
                        <td>Spring</td>
                    </tr>
                    <tr>
                        <td>Spacing</td>
                        <td>30-45 cm</td>
                    </tr>
                    <tr>
                        <td>Germination Time</td>
                        <td>10-15 days</td>
                    </tr>
                    <tr>
                        <td>Light Preference</td>
                        <td>Full sun to partial shade</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GrowItYourself;
