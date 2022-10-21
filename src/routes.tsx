import { element } from "prop-types";
import React, { Fragment, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "./components/Authentication/firebaseAuth/firebaseAuthSlice";
import AddProperty from "./components/Setup/PropertySetup/AddProperty/AddProperty/AddProperty";
import Loader from "./Layouts/Loader/Loader";
const Auth = lazy(
  () => import("./components/Authentication/firebaseAuth/auth")
);
const App = lazy(() => import("./components/app"));

const Counters = lazy(() => import("./components/apps/Counters/Counters"));

const DefaultCalender = lazy(
  () => import("./components/apps/DefaultCalender/DefaultCalender")
);
const Footers = lazy(() => import("./components/apps/Footers/Footers"));
const FullCalender = lazy(
  () => import("./components/apps/FullCalender/FullCalender")
);

const Userlist = lazy(() => import("./components/apps/Userlist/Userlist"));
const Error401 = lazy(
  () => import("./components/Authentication/errorPage/Error401/Error401")
);
const Error403 = lazy(
  () => import("./components/Authentication/errorPage/Error403/Error403")
);
const Error404 = lazy(
  () => import("./components/Authentication/errorPage/Error404/Error404")
);
const Error503 = lazy(
  () => import("./components/Authentication/errorPage/Error503/Error503")
);
const ForgotPassword = lazy(
  () => import("./components/Authentication/Forgot Password/ForgotPassword")
);
const LockScreen = lazy(
  () => import("./components/Authentication/LockScreen/LockScreen")
);
const Register = lazy(
  () => import("./components/Authentication/Register/Register")
);
const Ribbons = lazy(() => import("./components/bootstrap/Ribbons/Ribbons"));
const Chartjs = lazy(() => import("./components/Charts/Chart Js/Chartjs"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const BootstrapIcons = lazy(
  () => import("./components/Icons/BootstrapIcons/BootstrapIcons")
);
const FeatherIcons = lazy(
  () => import("./components/Icons/FeatherIcons/FeatherIcons")
);
const FlagIcons = lazy(() => import("./components/Icons/FlagIcons/FlagIcons"));
const FontAwesome = lazy(
  () => import("./components/Icons/FontAwesome/FontAwesome")
);
const IonicIcons = lazy(
  () => import("./components/Icons/IonicIcons/IonicIcons")
);
const MaterialDesignIcons = lazy(
  () => import("./components/Icons/MaterialDesignIcons/MaterialDesignIcons")
);
const Pe7Icons = lazy(() => import("./components/Icons/Pe7Icons/Pe7Icons"));
const SimpleLineIcons = lazy(
  () => import("./components/Icons/SimpleLineIcons/SimpleLineIcons")
);
const ThemifyIcons = lazy(
  () => import("./components/Icons/ThemifyIcons/ThemifyIcons")
);
const TypiconsIcons = lazy(
  () => import("./components/Icons/TypiconsIcons/TypiconsIcons")
);
const WeatherIcons = lazy(
  () => import("./components/Icons/WeatherIcons/WeatherIcons")
);
const LeafletMaps = lazy(
  () => import("./components/Maps/LeafletMaps/LeafletMaps")
);
const SimpleMaps = lazy(
  () => import("./components/Maps/SimpleMaps/SimpleMaps")
);

const Editprofile = lazy(
  () => import("./components/pages/Editprofile/Editprofile")
);
const AboutCompany = lazy(
  () => import("./components/pages/Extension/AboutCompany/AboutCompany")
);
const Invoice = lazy(
  () => import("./components/pages/Extension/Invoice/Invoice")
);
const Pricing = lazy(
  () => import("./components/pages/Extension/Pricing/Pricing")
);

const Settings = lazy(
  () => import("./components/pages/Extension/Settings/Settings")
);
const Terms = lazy(() => import("./components/pages/Extension/Terms/Terms"));
const UnderConstruction = lazy(
  () =>
    import("./components/pages/Extension/UnderConstruction/UnderConstruction")
);
const FormAdvanced = lazy(
  () => import("./components/pages/forms/FormAdvanced/FormAdvanced")
);
const FormEditor = lazy(
  () => import("./components/pages/forms/FormEditor/FormEditor")
);
const FormElements = lazy(
  () => import("./components/pages/forms/FormElements/FormElements")
);
const FormLayouts = lazy(
  () => import("./components/pages/forms/FormLayouts/FormLayouts")
);
const FormValidation = lazy(
  () => import("./components/pages/forms/FormValidation/FormValidation")
);
const FormWizard = lazy(
  () => import("./components/pages/forms/FormWizard/FormWizard")
);

const DataTable = lazy(
  () => import("./components/pages/tables/DataTable/DataTable")
);
const DefaultTable = lazy(
  () => import("./components/pages/tables/DefaultTable/DefaultTable")
);
const EditTable = lazy(
  () => import("./components/pages/tables/EditTable/EditTable")
);

const Line = lazy(() => import("./components/Charts/ApexChart/Line/Line"));
const Area = lazy(() => import("./components/Charts/ApexChart/Area/Area"));
const Column = lazy(
  () => import("./components/Charts/ApexChart/Column/Column")
);
const Bar = lazy(() => import("./components/Charts/ApexChart/Bar/Bar"));
const Mixed = lazy(() => import("./components/Charts/ApexChart/Mixed/Mixed"));
const CandleStick = lazy(
  () => import("./components/Charts/ApexChart/CandleStick/CandleStick")
);
const Boxplot = lazy(
  () => import("./components/Charts/ApexChart/Boxplot/Boxplot")
);
const Treemap = lazy(
  () => import("./components/Charts/ApexChart/Treemap/Treemap")
);
const Pie = lazy(() => import("./components/Charts/ApexChart/Pie/Pie"));
const Radialbar = lazy(
  () => import("./components/Charts/ApexChart/Radialbar/Radialbar")
);
const Radar = lazy(() => import("./components/Charts/ApexChart/Radar/Radar"));
const Polararea = lazy(
  () => import("./components/Charts/ApexChart/Polararea/Polararea")
);

const Lines = lazy(() => import("./components/Charts/Echarts/Line/Lines"));
const Trees = lazy(() => import("./components/Charts/Echarts/Tree/Trees"));
const Scatters = lazy(
  () => import("./components/Charts/Echarts/Scatter/Scatters")
);
const Timelines = lazy(
  () => import("./components/Charts/ApexChart/Timeline/Timelines")
);
const CandleSticks = lazy(
  () => import("./components/Charts/Echarts/CandleSticks/CandleSticks")
);
const Bars = lazy(() => import("./components/Charts/Echarts/Bars/Bars"));
const Widgets = lazy(() => import("./components/apps/Widgets/Widgets"));
const FormInputSpinners = lazy(
  () => import("./components/pages/forms/FormInputSpinners/FormInputSpinners")
);
const CustomPage = lazy(() => import("./components/CustomPage"));
const Error400 = lazy(
  () => import("./components/Authentication/errorPage/Error400/Error400")
);
const Error500 = lazy(
  () => import("./components/Authentication/errorPage/Error500/Error500")
);
const Login = lazy(() => import("./components/Authentication/Login/Login"));
const AuthenticationPage = lazy(
  () => import("./components/AuthenticationPage")
);
const ErrorPages = lazy(() => import("./components/ErrorPages"));
const Switcherapp = lazy(() => import("./components/Switcherapp"));
const Landing = lazy(() => import("./components/Landing"));
const AuthLogin = lazy(
  () => import("./components/Authentication/firebaseAuth/AuthLogin")
);
const SignUp = lazy(
  () => import("./components/Authentication/firebaseAuth/Signup")
);
const FrontOffice = lazy(() => import("./components/FrontOffice/FrontOffice"));
const PropertySpace = lazy(
  () => import("./components/Setup/PropertySpace/PropertySpace")
);
const GuestServices = lazy(
  () => import("./components/GuestServices/GuestServices")
);
const PropertySetup = lazy(
  () => import("./components/Setup/PropertySetup/PropertySetup")
);
const BusinessSetup = lazy(
  () => import("./components/Setup/BusinessSetup/BusinessSetup")
);
const RateSetup = lazy(() => import("./components/Setup/RateSetup/RateSetup"));
const OwnerAddOn = lazy(
  () => import("./components/Setup/OwnerAddOn/OwnerAddOn")
);
const SPNAddOn = lazy(() => import("./components/Setup/SPNAddOn/SPNAddOn"));
const HKMaintenance = lazy(
  () => import("./components/Setup/HKMaintenance/HKMaintenance")
);
const ChannelMgt = lazy(
  () => import("./components/Setup/ChannelMgt/ChannelMgt")
);
const Accounts = lazy(() => import("./components/Accounts/Accounts"));
const Rates = lazy(() => import("./components/Rates/Rates"));
const Marketing = lazy(() => import("./components/Marketing/Marketing"));
const Communication = lazy(
  () => import("./components/Communication/Communication")
);
const AddRate = lazy(
  () => import("./components/Setup/RateSetup/AddRate/AddRate")
);
const CreateSeason = lazy(
  () => import("./components/Setup/RateSetup/CreateSeason/CreateSeason")
);
const EditRate = lazy(
  () => import("./components/Setup/RateSetup/EditRateSetup/EditRateSetup")
);

const RoutesMain = () => {
  const { user } = useUser();

  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            {user.accessToken ? (
              <Route path={``} element={<App />}>
                {/* Apps */}
                <Route>
                  <Route path={`/`} element={<Dashboard />} />
                  <Route path={`/dashboard`} element={<Dashboard />} />
                  <Route path={`/frontoffice`} element={<FrontOffice />} />
                  <Route path={`/accounts`} element={<Accounts />} />
                  <Route path={`/rates`} element={<Rates />} />
                  <Route path={`/guestservices`} element={<GuestServices />} />
                  <Route path={`/marketing`} element={<Marketing />} />
                  <Route path={`/communication`} element={<Communication />} />
                  <Route
                    path={`/setup/businesssetup`}
                    element={<BusinessSetup />}
                  />
                  <Route
                    path={`/setup/propertysetup`}
                    element={<PropertySetup />}
                  />
                  <Route
                    path={`/setup/propertysetup/add-property`}
                    element={<AddProperty />}
                  />
                  <Route
                    path={`/setup/propertysetup/add-property/:id`}
                    element={<AddProperty />}
                  />
                  <Route
                    path={`/setup/propertyspace`}
                    element={<PropertySpace />}
                  />
                  <Route path={`/setup/ratesetup`} element={<RateSetup />} />
                  <Route
                    path={`/setup/ratesetup/addrate`}
                    element={<AddRate />}
                  />
                  <Route
                    path={`/setup/ratesetup/editrate`}
                    element={<EditRate />}
                  />
                  <Route
                    path={`/setup/ratesetup/editrate/:id`}
                    element={<EditRate />}
                  />
                  <Route
                    path={`/setup/ratesetup/createseason`}
                    element={<CreateSeason />}
                  />
                  <Route path={`/setup/owneraddon`} element={<OwnerAddOn />} />
                  <Route
                    path={`/setup/spnaddon`}
                    element={<SPNAddOn />}
                  ></Route>
                  <Route
                    path={`/setup/hkmaintenance`}
                    element={<HKMaintenance />}
                  />
                  <Route path={`/setup/channelmgt`} element={<ChannelMgt />} />
                  <Route
                    path={`/apps/defaultcalender`}
                    element={<DefaultCalender />}
                  />
                  <Route path={`/apps/footer`} element={<Footers />} />,
                  <Route
                    path={`/apps/fullcalender`}
                    element={<FullCalender />}
                  />
                  <Route path={`/apps/userlist`} element={<Userlist />} />,
                  <Route path={`/apps/widgets`} element={<Widgets />} />,
                </Route>

                {/* bootstrap */}
                <Route>
                  <Route path={`/bootstrap/ribbons`} element={<Ribbons />} />,
                </Route>

                {/* Charts */}
                <Route>
                  <Route path={`/charts/chartjs`} element={<Chartjs />} />,
                  <Route path={`/charts/echart/lines`} element={<Lines />} />,
                  <Route path={`/charts/echart/bar`} element={<Bars />} />,
                  <Route
                    path={`/charts/echart/candlestick`}
                    element={<CandleSticks />}
                  />
                  ,
                  <Route
                    path={`/charts/echart/scatter`}
                    element={<Scatters />}
                  />
                  ,
                  <Route path={`/charts/echart/tree`} element={<Trees />} />,
                  <Route path={`/charts/apexchart/line`} element={<Line />} />,
                  <Route path={`/charts/apexchart/area`} element={<Area />} />,
                  <Route
                    path={`/charts/apexchart/column`}
                    element={<Column />}
                  />
                  ,
                  <Route path={`/charts/apexchart/bar`} element={<Bar />} />,
                  <Route path={`/charts/apexchart/mixed`} element={<Mixed />} />
                  ,
                  <Route
                    path={`/charts/apexchart/timeline`}
                    element={<Timelines />}
                  />
                  ,
                  <Route
                    path={`/charts/apexchart/candlestick`}
                    element={<CandleStick />}
                  />
                  ,
                  <Route
                    path={`/charts/apexchart/boxplot`}
                    element={<Boxplot />}
                  />
                  ,
                  <Route
                    path={`/charts/apexchart/treemap`}
                    element={<Treemap />}
                  />
                  ,
                  <Route path={`/charts/apexchart/pie`} element={<Pie />} />,
                  <Route
                    path={`/charts/apexchart/radialbar`}
                    element={<Radialbar />}
                  />
                  ,
                  <Route path={`/charts/apexchart/radar`} element={<Radar />} />
                  ,
                  <Route
                    path={`/charts/apexchart/polararea`}
                    element={<Polararea />}
                  />
                  ,
                </Route>

                {/* Icons */}
                <Route>
                  <Route
                    path={`/icons/bootstrapicons`}
                    element={<BootstrapIcons />}
                  />
                  ,
                  <Route
                    path={`/icons/feathericons`}
                    element={<FeatherIcons />}
                  />
                  ,
                  <Route path={`/icons/flagicons`} element={<FlagIcons />} />,
                  <Route
                    path={`/icons/fontawesome`}
                    element={<FontAwesome />}
                  />
                  ,
                  <Route path={`/icons/ionicicons`} element={<IonicIcons />} />,
                  <Route
                    path={`/icons/materialdesignicons`}
                    element={<MaterialDesignIcons />}
                  />
                  ,
                  <Route path={`/icons/pe7icons`} element={<Pe7Icons />} />,
                  <Route
                    path={`/icons/simplelineicons`}
                    element={<SimpleLineIcons />}
                  />
                  ,
                  <Route
                    path={`/icons/themifyicons`}
                    element={<ThemifyIcons />}
                  />
                  ,
                  <Route
                    path={`/icons/typiconsicons`}
                    element={<TypiconsIcons />}
                  />
                  ,
                  <Route
                    path={`/icons/weathericons`}
                    element={<WeatherIcons />}
                  />
                  ,
                </Route>

                {/* Maps */}
                <Route>
                  <Route path={`/maps/leafletmaps`} element={<LeafletMaps />} />
                  ,
                  <Route path={`/maps/simplemaps`} element={<SimpleMaps />} />,
                </Route>

                {/* Pages */}
                <Route>
                  <Route
                    path={`/pages/editprofile`}
                    element={<Editprofile />}
                  />
                  ,
                  <Route
                    path={`/pages/extension/aboutcompany`}
                    element={<AboutCompany />}
                  />
                  ,
                  <Route
                    path={`/pages/extension/invoice`}
                    element={<Invoice />}
                  />
                  ,
                  <Route
                    path={`/pages/extension/pricing`}
                    element={<Pricing />}
                  />
                  ,
                  <Route
                    path={`/pages/extension/setting`}
                    element={<Settings />}
                  />
                  ,
                  <Route path={`/pages/extension/term`} element={<Terms />} />,
                  <Route
                    path={`/pages/forms/formadvanced`}
                    element={<FormAdvanced />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/formeditor`}
                    element={<FormEditor />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/formelements`}
                    element={<FormElements />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/formlayouts`}
                    element={<FormLayouts />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/formvalidation`}
                    element={<FormValidation />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/forminputspinner`}
                    element={<FormInputSpinners />}
                  />
                  ,
                  <Route
                    path={`/pages/forms/formwizard`}
                    element={<FormWizard />}
                  />
                  ,
                  <Route
                    path={`/pages/tables/datatables`}
                    element={<DataTable />}
                  />
                  ,
                  <Route
                    path={`/pages/tables/edittables`}
                    element={<EditTable />}
                  />
                  ,
                </Route>
                <Route>
                  <Route
                    path={`/pages/tables/defaulttables`}
                    element={<DefaultTable />}
                  />
                  ,
                </Route>
              </Route>
            ) : (
              <Route path={`/`} element={<Auth />}>
                <Route index element={<AuthLogin />} />
                <Route path={`/login`} element={<AuthLogin />} />
                <Route path={`/SignUp`} element={<SignUp />} />
              </Route>
            )}

            {/* Authentication Pages */}
            <Route path={`/`} element={<AuthenticationPage />}>
              <Route path={`/authentication/login`} element={<Login />} />
              <Route path={`/authentication/register`} element={<Register />} />
              <Route
                path={`/authentication/forgotpassword`}
                element={<ForgotPassword />}
              />
              <Route
                path={`/authentication/lockscreen`}
                element={<LockScreen />}
              />
              ,
            </Route>

            {/* Custom Pages for UnderConstruction */}

            <Route path={`/`} element={<CustomPage />}>
              <Route
                path={`/pages/extension/underconstruction`}
                element={<UnderConstruction />}
              />
            </Route>

            {/* Authentication Error Pages */}
            <Route path={``} element={<ErrorPages />}>
              <Route
                path={`/authentication/errorpage/error400`}
                element={<Error400 />}
              />
              <Route
                path={`/authentication/errorpage/error401`}
                element={<Error401 />}
              />
              <Route
                path={`/authentication/errorpage/error403`}
                element={<Error403 />}
              />
              <Route
                path={`/authentication/errorpage/error404`}
                element={<Error404 />}
              />
              <Route
                path={`/authentication/errorpage/error500`}
                element={<Error500 />}
              />
              <Route
                path={`/authentication/errorpage/error503`}
                element={<Error503 />}
              />
              ,
            </Route>
            {/* Firebase Authentication */}

            <Route>
              <Route
                path={`/pages/switcher/switcherstyle1`}
                element={<Switcherapp />}
              />
              ,
            </Route>
            <Route>
              <Route path={`/landingPage/landingPage`} element={<Landing />} />
            </Route>
            <Route path="*" element={<Error500 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
export default RoutesMain;
