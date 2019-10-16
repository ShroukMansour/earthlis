/*
 * Copyright 2003-2006, 2009, 2017, United States Government, as represented by the Administrator of the
 * National Aeronautics and Space Administration. All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Illustrates the use of multiple WorldWindows on the same page.
 */
requirejs(['./WorldWindShim'], function () {
    "use strict";

    // Tell WorldWind to log only warnings and errors.
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);


    // Create the shared shape layer and imagery laye
    var imageryLayer = new WorldWind.BingAerialWithLabelsLayer(null),
        atmosphereLayer = new WorldWind.AtmosphereLayer();

    var wwd1 = new WorldWind.WorldWindow("canvasOne");
    wwd1.addLayer(imageryLayer);
    wwd1.addLayer(atmosphereLayer);
    // Add a compass layer, view controls layer, and coordinates display layer. Each WorldWindow must have its own.
    wwd1.addLayer(new WorldWind.CompassLayer());
    wwd1.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd1));
    wwd1.addLayer(new WorldWind.ViewControlsLayer(wwd1));

    var wwd2 = new WorldWind.WorldWindow("canvasTwo");
    wwd2.addLayer(imageryLayer);
    wwd2.addLayer(atmosphereLayer);
    wwd2.addLayer(new WorldWind.CompassLayer());
    wwd2.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd2));
    wwd2.addLayer(new WorldWind.ViewControlsLayer(wwd2));


});